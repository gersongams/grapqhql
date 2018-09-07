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

// Add a new lyric to song 

`
mutation {
  addLyricToSong(
    content: "Last night I dreamt of San Pedro",
    songId: "5b85ce876058452677468e1b"){
    id
  }
}
`
// Get all the songs

`
{
  songs{
		id
    title
    lyrics {
      id
      content
    }
  }
}
`