'use client';
import { useState } from 'react';
import SelectProductAmount from '@/components/single-product/SelectProductAmount';
import { Mode } from '@/components/single-product/SelectProductAmount';
import FormContainer from '@/components/form/FormContainer';
import { SubmitButton } from '@/components/form/Buttons';
import { removeCartItemAction, updateCartItemAction } from '@/utils/actions';
import { useToast } from '@/components/ui/use-toast';

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast({ description: 'Calculating...' });
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });
    setAmount(value);
    toast({ description: result.message });
    setIsLoading(false);
  };

    return (
    <div className='md:ml-8'>
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={false}
      />
      <FormContainer action={removeCartItemAction}>
        <input type='hidden' name='id' value={id} />
        <SubmitButton size='sm' className='mt-4' text='remove' />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;
