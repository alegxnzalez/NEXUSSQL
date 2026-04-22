// GTM_CA_LINE_NOTES.js

window.GTM_CA_LINE_NOTES = {
  "tables": {
    "GTM_CA_LINE_NOTES": {
      "description": "This tables contains campaign line notes.",
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
          "foreign_key": "GTM_CAMPAIGN_LINE",
          "info": "This field represents unique campaign line ID across all domains."
},
        "GTM_CA_LINE_NOTE_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number for campaign line note."
},
        "SUMMARY": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "info": "Summery of user or system comment."
},
        "NOTE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Holds details note of user or system comment."
},
        "IS_SYSTEM_GENERATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "NOTE_ENTERED_BY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "User id of user who provides the comment."
},
        "NOTE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "This fields holds the date on which note was added on campaign line."
}
      },
      "fk_tables": []
    }
  }
};