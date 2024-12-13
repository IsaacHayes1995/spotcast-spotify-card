export interface Account  {
    country: string,
    entry_id: string,
    is_default: boolean,
    spotify_id: string,
    spotify_name: string
}

export interface AccountResponse {
  accounts: Account[]
}