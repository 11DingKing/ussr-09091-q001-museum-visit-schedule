from dataclasses import dataclass
from enum import StrEnum


class VisitState(StrEnum):
    PENDING = "pending"
    CONFIRMED = "confirmed"
    WAITLISTED = "waitlisted"
    CANCELLED = "cancelled"


@dataclass(frozen=True)
class VisitRequest:
    request_id: str
    party_size: int
    state: VisitState = VisitState.PENDING
