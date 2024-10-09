export const foramtCurrency = (amount :number | null) =>{
    const value = amount || 0 
    return new Intl.NumberFormat('en-EG',{
        style:"currency",
        currency:"EGP"
    }).format(value);
}