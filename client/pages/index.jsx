import { Button, Center, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import useSWR from "swr";
import { apiData } from "../util/apiData";
import { fetchData } from "../api/API";
export default function Home() {
  const { data } = useSWR(`${apiData.url}auth/users/me`, fetchData, {
    refreshInterval: 0,
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Pulzion MCQ Platform</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Stack spacing={"6"}>
            <Text>
              <a href="https://pulzion.in">Pulzion</a> MCQ Platform
            </Text>
            <Center>
              {data ? (
                <Link href={"/tests"}>
                  <Button w="30%">Go to Tests</Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button w="30%">Login</Button>
                  
                </Link>
              )}
            </Center>
          </Stack>
        </h1>
      </main>
    </div>
  );
}
