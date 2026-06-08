import { Cart } from '../components/Cart';
import { PageHeader } from '../components/PageHeader';

export function CartPage() {
  return (
    <div className="pb-0">
      <PageHeader 
        title="Shopping Cart" 
        description="Review and manage your selected items before checkout."
      />
      <Cart />
    </div>
  );
}
