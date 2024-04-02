#include <iostream>
using namespace std;

int main() {

	int a,b;

	scanf("%d %d", &a, &b);

	if (a <= 0 || b >= 10) { return 0; }
	
	cout << a + b << endl;

}