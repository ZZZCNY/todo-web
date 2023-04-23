'use client';

import {
  AppShell,
  Blockquote,
  Button,
  Flex,
  Group,
  Header,
  Stack,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import Logo from './logo';

export default function Home() {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <Group position="apart">
            <Logo />
            <Flex gap="md" align="center" h="100%">
              <Link href="/user/login">
                <Button variant="default">登录</Button>
              </Link>
              <Link href="/user/sign-up">
                <Button>注册</Button>
              </Link>
            </Flex>
          </Group>
        </Header>
      }
    >
      <Stack align="center" justify="center" h="100%">
        <Blockquote cite="By 周晨阳" icon={null}>
          <Title>一个由 AI 驱动的 Todo</Title>
        </Blockquote>
      </Stack>
    </AppShell>
  );
}
