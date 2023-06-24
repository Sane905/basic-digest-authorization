import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { NextPage } from 'next';
import { useState, useEffect, useCallback } from 'react';
import {  Button, Text } from '@chakra-ui/react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const Page: NextPage = () => {
    // useAuth()
    const router = useRouter()
	const onClickHome = useCallback(
      () => {
        router.push('/home')
      },
      [],
    )
    
	return (
		<>
			<Text>hello</Text>
            <Button onClick={onClickHome}>遷移</Button>
		</>
	);
};

export default Page;
