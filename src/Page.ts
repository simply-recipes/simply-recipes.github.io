import React from 'react';
import { NextPage, NextPageContext } from 'next';

export interface PageProperties {
  getSubtitle(): string | undefined;
}

export type PageType<P = {}, IP = P> = PageProperties & NextPage<P, IP>;

export default class Page<P = {}, S = {}> extends React.Component<P, S> implements PageProperties {
  getSubtitle(): string | undefined {
    return undefined;
  }
}

export function isPageProperties(page: any): page is PageProperties {
  return 'getSubtitle' in page;
}
