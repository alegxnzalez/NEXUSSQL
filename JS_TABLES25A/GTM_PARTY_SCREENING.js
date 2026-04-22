// GTM_PARTY_SCREENING.js

window.GTM_PARTY_SCREENING = {
  "tables": {
    "GTM_PARTY_SCREENING": {
      "columns": {
        "PARTY_SCREENING_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number for potential matches. "
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the contact. "
        },
        "GTM_DENIED_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DENIED_PARTY",
          "info": "The GID for the denied party. "
        },
        "SCREENING_STATUS": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "APPROVED",
            "REJECTED",
            "REQUIRES REVIEW",
            "ESCALATED"
          ],
          "info": "Denied party to party screening status. Potential Match -Some similarities exist between the restricted party list and the contact being screened.  Verified Match - The contact being screened matches a name on the restricted party list and the match has been verified by a user.  Not a Match\n - No similarity exists between the restricted party list and the contact being screened.  Escalated -\nThe potential match was referred to another person for review. "
        },
        "APPROVED_BY": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Approver for matches requiring review. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "MATCH_FACTOR": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Match factor is determined by GTM and represents the match factor (matching percentage) between the party and the restricted party. "
        },
        "GTM_SERVICE_PREF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_SERVICE_PREF",
          "info": "The unique GID for the service preference used for screening."
        }
      },
      "fk_tables": [
        "GTM_PARTY_SCREENING_COMMENT"
      ]
    }
  }
};
