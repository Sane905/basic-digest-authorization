import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import { useAuth } from '@/hooks/useAuth';

const Page: NextPage = () => {
    // useAuth()

	return (
		<>
			<Text>hello</Text>
		</>
	);
};

export default Page;
