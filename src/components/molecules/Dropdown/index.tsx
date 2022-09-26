import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Text from "components/atoms/Text"
import Flex from "components/layout/Flex"

const DropdownRoot = styled.div`
  position: relative;
  height: 38px;
`

const DropdownControl = styled.div<{ hasError?: boolean  }>`
  position: relative;
`