// GTM_CA_LINE_REQDD_REVIEW.js

window.GTM_CA_LINE_REQDD_REVIEW = {
  "tables": {
    "GTM_CA_LINE_REQDD_REVIEW": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "GTM_CAMPAIGN_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CA_LINE_REQD_DOC",
          "info": "Campaign Line ID"
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CA_LINE_REQD_DOC",
          "info": "Required Document Type"
},
        "DOCUMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CA_LINE_REQD_DOC",
          "info": "Document Instance"
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "Reviewer ID"
},
        "STATE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "PENDING",
                    "ACCEPTED",
                    "DENIED"
          ],
          "info": "Review state"
},
        "COMMENTS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Comments added by the reviewer"
}
      },
      "fk_tables": []
    }
  }
};