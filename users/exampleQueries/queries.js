// Example of first query to get the user with id 40
`
query #NAMEOFQUERYIFYOUWANT {
    user(id: "40"){
      id,
      firstName,
      age
    }
}
`

// Example of query with company


`
query{
    user(id: "40"){
      id,
      firstName,
      age
      company {
          id
      }
    }
}
`

// Example to get the company by ID

`
query{
    company(id:"1"){
      id
      name
      description
    }
  }
`

// Get the list of user in a company

`
query{
    company(id:"2"){
      id
      name
      description
      users {
        id
        firstName
        age
      }
    }
  }
`

// To make multiple queries 

`
query{
    apple: company(id:"1"){
      id
      name
      description
      users {
        id
        firstName
        age
      }
    } 
    google: company(id:"2"){
      id
      name
      description
      users {
        id
        firstName
        age
      }
    }
  }
`

// Use fragments to avoid repetitive code

`
fragment companyDetails on Company {
    id
    name
    description
    users {
        id
        firstName
        age
    }
}
`

// Multiple queries with fragments

`
query{
    apple: company(id:"1"){
      ...companyDetails
    } 
    google: company(id:"2"){
      ...companyDetails
    }
  }
`

// MUTATIONS

`
mutation {
    addUser(firstName: "Gerson", age: 24) {
        id
        firstName
        age
    }
}
`

`
mutation {
    deleteUser(id: "23")
}
`

`
mutation {
    editUser(id: "41", firstName:"Gerson", age: 23) {
      id
      firstName
      age
    }
  }
`