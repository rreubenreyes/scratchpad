typedef struct IntegerList {
	int* arr;
	void (*push)(int n, const struct IntegerList*);
} IntegerList;

void push(int n = NULL, const struct IntegerList* list) {
	if n == NULL return;
	int len = sizeof(list) / sizeof(int);
	list->arr = realloc(list, len);
	list->arr[len+1] = n;
}	