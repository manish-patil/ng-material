export interface SearchConfig {
    columns: SearchColumn[]
}

export interface SearchColumn {
    displayColumnName: string,
    displayColumnTitle: string,
    displayColumn: boolean
} 