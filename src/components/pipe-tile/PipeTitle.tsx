import React, { FC } from 'react'
import { Types } from 'api'
import { Tile } from './PipeTile.styles'

interface PipeTileProps {
  pipe: Types.Pipe
}

const PipeTile: FC<PipeTileProps> = ({ pipe }) => (
  <Tile bgColor={pipe.color}>{pipe.name}</Tile>
)

export default PipeTile