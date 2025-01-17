export interface CoinProps {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null;
    last_updated: string;
}

type Ticker = {
    base: string;
    bid_ask_spread_percentage: number;
    coin_id: string;
    converted_last: {
        btc: number;
        eth: number;
        usd: number;
    };
    converted_volume: {
        btc: number;
        eth: number;
        usd: number;
    };
    is_anomaly: boolean;
    is_stale: boolean;
    last: number;
    last_fetch_at: string;
    last_traded_at: string;
    market: {
        name: string;
        identifier: string;
        has_trading_incentive: boolean;
        has_referral_params: boolean;
    };
    target: string;
    target_coin_id: string;
    timestamp: string;
    token_info_url: null | string;
    trade_url: string;
    trust_score: string;
    volume: number;
}

type TickersArray = Ticker[];

export interface PriceChangeData {
    price_change_24h: number;
    price_change_percentage_24h: number ;
    price_change_percentage_7d: number ;
    price_change_percentage_14d: number ;
    price_change_percentage_30d: number ;
    price_change_percentage_60d: number ;
    price_change_percentage_200d: number ;
    price_change_percentage_1y: number ;
    market_cap_change_24h: number ;
    market_cap_change_percentage_24h: number ;
    high_24h:{
        usd: number;
    };
}

export interface InfoData {

    asset_platform_id: null | string;
    block_time_in_minutes: number;
    categories: string[];
    community_data: {
        facebook_likes: number | null;
        twitter_followers: number | null;
        reddit_average_posts_48h: number | null;
        reddit_average_comments_48h: number | null;
        reddit_subscribers: number | null;
        // Add other community data properties as needed
    };
    country_origin: string;
    description: {
        en: string;
        // Add other language descriptions as needed
    };
    detail_platforms: { [key: string]: string };
    developer_data: {
        forks: number;
        stars: number;
        subscribers: number;
        total_issues: number;
        closed_issues: number;
        // Add other developer data properties as needed
    };
    genesis_date: string;
    hashing_algorithm: string;
    id: string;
    image: {
        thumb: string;
        small: string;
        large: string;
    };
    last_updated: string;
    links: {
        homepage: string[];
        whitepaper: string;
        blockchain_site: string[];
        official_forum_url: string[];
        chat_url: string[];
        // Add other link properties as needed
    };
    market_cap_rank: number;
    market_data: {
        price_change_24h: number;
        price_change_percentage_24h: number ;
        price_change_percentage_7d: number ;
        price_change_percentage_14d: number ;
        price_change_percentage_30d: number ;
        price_change_percentage_60d: number ;
        price_change_percentage_200d: number ;
        price_change_percentage_1y: number ;
        market_cap_change_24h: number ;
        market_cap_change_percentage_24h: number ;
        high_24h:{
            usd: number;
        };
        low_24h:{
            usd: number;
        };
        market_cap: {
            usd: number;
        };
        total_volume:{
            usd: number;
        }
        circulating_supply: number;
        max_supply: number;
        total_supply: number;
    };
    name: string;
    platforms: { [key: string]: string };
    preview_listing: boolean;
    public_notice: null | string;
    sentiment_votes_down_percentage: number;
    sentiment_votes_up_percentage: number;
    status_updates: string[];
    symbol: string;
    tickers:  TickersArray;
    watchlist_portfolio_users: number;
    web_slug: string;
}