import { useEffect, useState } from "react";

export function useFetch(url) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getPokemonList() {
    const temp = [];
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(
    function () {
      getPokemonList();
    },
    [url]
  );

  return { pokemon, loading, error };
}

export function useMultipleFetch(url) {
  const { pokemon: urls } = useFetch(url);

  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const promises = urls.results.map(async (result) => {
        const response = await fetch(result.url);
        const json = await response.json();
        return json;
      });
      const resolved = await Promise.all(promises);
      setPokemon(resolved);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(
    function () {
      if (urls && urls.results) {
        fetchData();
      }
    },
    [urls]
  );

  return { loading, pokemon, error };
}
