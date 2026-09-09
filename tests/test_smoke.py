import unittest

from src.visit_schedule.domain import VisitRequest, VisitState


class DomainSmokeTest(unittest.TestCase):
    def test_request_starts_pending(self):
        self.assertEqual(VisitRequest("demo", 1).state, VisitState.PENDING)


if __name__ == "__main__":
    unittest.main()
