"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import FormContainer from "@/components/form/FormContainer";
import {toggleFavoriteAction} from '@/utils/actions'
import { CardSubmitButton } from '@/components/form/Buttons';
type FavoriteToggleButtonProps = {
  productId:string;
  favoriteId:string | null
}
function FavoriteToggleForm({productId,favoriteId}:FavoriteToggleButtonProps) {
  const pathName = usePathname()
  const toggleAction = toggleFavoriteAction.bind()
  return (
    <div>FavoriteToggleForm</div>
  )
}

export default FavoriteToggleForm