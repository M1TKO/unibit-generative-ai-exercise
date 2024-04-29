// file: /pages/index.js
import React, { useState } from 'react';
import Head from "next/head";
import TextInput from "@/components/TextInput";
import SubmitButton from "@/components/SubmitButton";
import ResponseDisplay from "@/components/ResponseDisplay";
import useApi from "@/hooks/useApi";
import { getUserPrompt } from "../prompts/promptUtils";

export default function Home() {
  const [keywords, setKeywords] = useState("");
  const [values, setValues] = useState("");
  const { data, error, loading, fetchData } = useApi();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitValue = getUserPrompt({ keywords, values });
    await fetchData("/api/openai", "POST", submitValue);
  };

  const handleKeywordsChange = (event) => setKeywords(event.target.value);
  const handleValuesChange = (event) => setValues(event.target.value);

  return (
    <>
      <Head>
        <title>Brand Naming Tool</title>
      </Head>
      <main className="container">
        <h1>Brand Naming Tool</h1>
        <form onSubmit={handleSubmit}>
          <TextInput value={keywords} onChange={handleKeywordsChange} placeholder={"Enter business keywords (e.g., sustainable, technology, health)"} />
          <TextInput value={values} onChange={handleValuesChange} placeholder={"Enter business values (e.g., innovation, customer focus, integrity)"} />
          <SubmitButton disabled={loading} />
          <ResponseDisplay data={data} error={error} loading={loading} />
        </form>
      </main>
    </>
  );
}
