export interface ConfigI{
    bitcoin: BitcoinConfigI
}

export interface BitcoinConfigI{
    username: string
    password: string
    network: string
    url: string
}