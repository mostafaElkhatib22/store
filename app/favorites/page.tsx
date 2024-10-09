import SectionTitle from '@/components/global/SectionTitle'
import { fetchUserFavorites } from '@/utils/actions'
import React from 'react'

export default async function FavoritePage() {
  const favorites = await fetchUserFavorites()
  if (favorites.length===0) {
    return <SectionTitle text="you don't have any favorite products yet😒"/>
  }
  return (
    <div>
      
    </div>
  )
}
