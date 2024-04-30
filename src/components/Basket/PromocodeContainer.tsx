import { PromocodeDto } from "../../@types/ententy/Promocode"

type Props = {
  promocode: PromocodeDto
}

const PromocodeContainer = ({ promocode }: Props) => {
  return (
    <div className="basket__offer-row basket__offer-row--without-arrow basket__offer-row--space-beetwen basket__offer-row--text-small">
      <div className="basket__offer-col">
        <div className="basket__offer-subtitle">Промокод</div>
      </div>
      <div className="basket__offer-col">
        <div className="basket__offer-subdescr">{promocode.code}</div>
      </div>
    </div>
  )
}

export default PromocodeContainer