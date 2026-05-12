export interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

export function findUserById(id: number): User | undefined {
  return users.find((u) => u.id === id);
}

export function getAllUsers(): User[] {
  return [...users];
}
