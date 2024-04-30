import { PromocodeDto } from "../../@types/ententy/Promocode"

type Props = {
  bonus: number
}

const BonusContainer = ({ bonus }: Props) => {
  return (
    <div className="basket__offer-row basket__offer-row--without-arrow basket__offer-row--space-beetwen basket__offer-row--text-small">
      <div className="basket__offer-col">
        <div className="basket__offer-subtitle">Потрачено бонусов</div>
      </div>
      <div className="basket__offer-col">
        <div className="basket__offer-subdescr">{bonus}&nbsp;₽</div>
      </div>
    </div>
  )
}

export default BonusContainer