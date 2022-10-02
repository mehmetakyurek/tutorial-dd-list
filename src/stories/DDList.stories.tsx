import React, { FC, ReactElement } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DDContainer, DDList, } from '../components';
import "./style.css"
import { DDItem } from '../components/DDItem';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DDList',
  component: DDContainer,
} as ComponentMeta<typeof DDContainer>;

export const Primary: ComponentStory<typeof DDContainer> = () => <DDContainer>
  <DDList>
  <DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem>
  </DDList>
  <DDList>
  <DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem>
  </DDList>
  <DDList>
  <DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem><DDItem>{quote}</DDItem>
  </DDList>
</DDContainer>;

const QuoteItem: FC<{ book: string, text: string, date: string }> = (props): ReactElement => {
  return <div className={"quotes-item"}>
    <div className={"quote-delete-button"}></div>
    <div className={"quotes-item-header"}>
      <div className={"quotes-item-book"}>{props.book || ""}</div>

    </div>
    <div className={"quotes-item-content"}>{props.text}</div>
    <div className={"quotes-item-date"}>{props.date}</div>
  </div>
}
const quote = <QuoteItem book="Türlerin Kökeni" date='30.09.2022' text="Edward FitzGerald, doğanın kendisinde bir anlam olduğu şeklindeki geleneksel anlayışlara meydan okuyan tezlerle dolu bir başka devrimci belge olan, Darwin'in Türlerin Kökeni'yle aynı yıl (1859), on birinci yüzyılda yaşamış İranlı şair Ömer Hayyam'ın Rubaiyat'ından yaptığı serbest çevirileri yayınlamıştı:Bu dünyada buluruz kendimizi, bilmeden. Nereden geldik, neden, su gibi öylece akıp giden" />