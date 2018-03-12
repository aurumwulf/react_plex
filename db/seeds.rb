100.times do
  Movie.create(
    title: Faker::Book.title,
    director: Faker::Book.author,
    producer: Faker::Book.publisher,
    genre: Faker::Book.genre
  )
end