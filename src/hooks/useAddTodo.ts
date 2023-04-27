import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../react-query/constents";
import todoService, { Todo } from "../react-query/services/todoService";

interface AddTodoContext {
    previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: todoService.post,

        onMutate: (newTodo: Todo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, todos => [newTodo, ...(todos || [])]);

            onAdd();

            return { previousTodos };
        },

        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map(todo => todo === newTodo ? savedTodo : todo)
            );

            //console.log(savedTodo);

            // // APPROACH: Invalidate the cache
            // queryClient.invalidateQueries({
            //   queryKey: CACHE_KEY_TODOS,
            // });

            // // APPROACH: Update the cache
            // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, todos => [savedTodo, ...(todos || [])]);

            // if (ref.current) {
            //   ref.current.value = '';
            // }
        },

        onError: (error, newTodo, context) => {
            if (!context) {
                return;
            }

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
        },
    });

}

export default useAddTodo