export type TCategory = {
  id: string
  title: string
}

export type TMovie = {
  backdrop: string | null
  critic_score: number | null
  end_year: number | null
  genre_names: string[]
  genres: number[]
  id: string
  imdb_id: string
  network_names: string[]
  networks: number[] | null
  original_language: string
  original_title: string
  plot_overview: string
  poster: string
  release_date: string
  relevance_percentile: number
  runtime_minutes: number
  similar_titles: number[]
  sources: {
    android_url: string | null
    episodes: number[] | null
    format: string
    ios_url: string | null
    name: string
    price: number | null
    region: string
    seasons: number[] | null
    source_id: number
    type: string
    web_url: string
  }[]
  title: string
  tmdb_id: number
  tmdb_type: string
  trailer: string | null
  trailer_thumbnail: string | null
  type: string
  us_rating: number | null
  user_rating: number | null
  year: number
}
