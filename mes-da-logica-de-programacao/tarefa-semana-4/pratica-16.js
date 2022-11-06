let Sites =
[{
    endereco: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
    tags: ["cachorro"],
    dataCriacao: "2022-06-08T09:46:36.611Z"
  },
  {
    endereco: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    tags: ["óculos", "cachorro", "livro"],
    dataCriacao: "2022-06-02T09:46:36.611Z"
  },
  {
    endereco: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    tags: ["coleira", "praia", "cachorro"],
    dataCriacao: "2022-06-13T09:46:36.611Z"
  },
  {
    endereco: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    tags: ["gato", "óculos"],
    dataCriacao: "2022-06-12T09:46:36.611Z"
  },
  {
    endereco: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    tags: ["gato"],
    dataCriacao: "2022-06-10T09:46:36.611Z"
  }]

  const Fotos = (lista, Busca) => 
  lista.filter((X) => 
  
  X.tags.includes(Busca));

  console.log(Fotos(Sites, "cachorro"));