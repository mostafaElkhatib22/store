export const foramtCurrency = (amount :number | null) =>{
    const value = amount || 0 
    return new Intl.NumberFormat('ar-EG',{
        style:"currency",
        currency:"EGP"
    }).format(value);
}