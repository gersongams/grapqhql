// Add a new song 

`
mutation {
	addSong(title: "La isla bonita"){
    id,
    title,
    lyrics{
      id
    }
  }
}
`