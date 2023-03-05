import { getPaniers } from '/server/config/mongo/paniers';

export async function getPaniersProps() {
  const { paniers } = await getPaniers();
  if (!paniers) throw new Error('Failed to fetch paniers');
  // Convert the _id property of each panier to a string
  const paniersStringified = paniers.map((panier) => ({
    ...panier,
    _id: panier._id.toString(),
  }));
  return { props: { panier: paniersStringified } };
}
