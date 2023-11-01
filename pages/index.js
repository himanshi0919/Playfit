import React from 'react';
import Link from 'next/link';

const centerContent = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
};

const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
};

const boxStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '10px',
    fontWeight: 'bold',
};

export default function Home() {
    return (
        <div style={centerContent}>
            <h1 style={headingStyle}>Welcome to Payfit</h1>
            <Link href="/dashboard">
                <div style={boxStyle}>
                    Questions List
                </div>
            </Link>
        </div>
    );
}
