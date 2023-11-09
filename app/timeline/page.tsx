'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './chart';

const user = [
  { name: "TOBINAGA" },
  { name: 'contact' },
  { name: 'gallery' },
  { name: 'august-discount-offer' },
  { name: 'case-studies' }
];

const gakuto = [
  { name: 'NaN', value: 453 },
  { name: '/imprint', value: 351 },
  { name: '/shop', value: 271 },
  { name: '/pricing', value: 191 }
];

const john = [
  { name: '/shop', value: 789 },
  { name: '/product-features', value: 676 },
  { name: '/about', value: 564 },
  { name: '/login', value: 234 },
  { name: '/downloads', value: 191 }
];

const data = [
  {
    user: 'user',
    post: '題名１',
    data: user
  },
  {
    user: 'Gakuto',
    post: '題名２',
    data: gakuto
  },
  {
    user: 'John',
    post: '題名３',
    data: john
  }
];

// 全ユーザーの投稿が時系列順に表示されるようにする
export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item) => (
          <Card key={item.user}>
            <Title>{item.user}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.post}</Metric>
            </Flex>
            <Flex className="mt-6">
              <Text>投稿内容</Text>
            </Flex>
            <BarList
              data={item.data}
              valueFormatter={(number: number) =>
                Intl.NumberFormat('us').format(number).toString()
              }
              className="mt-2"
            />
          </Card>
        ))}
      </Grid>
      <Chart />
    </main>
  );
}
