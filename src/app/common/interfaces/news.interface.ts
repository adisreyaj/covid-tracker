/*
 * File: news.interface.ts
 * Project: covid-tracker
 * Description:
 * File Created: Saturday, 4th April 2020 12:09:19 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 4th April 2020 12:09:19 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

// Generated by https://quicktype.io

export interface NewsData {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: null | string;
  title: string;
  description: string;
  url: string;
  urlToImage: null | string;
  publishedAt: string;
  content: null | string;
}

export interface Source {
  id: null | string;
  name: string;
}