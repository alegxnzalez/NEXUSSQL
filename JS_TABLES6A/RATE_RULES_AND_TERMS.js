// RATE_RULES_AND_TERMS.js

window.RATE_RULES_AND_TERMS = {
  "tables": {
    "RATE_RULES_AND_TERMS": {
      "columns": {
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The GID for the rate offering related to the rule information. "
        },
        "RULE_NUMBER": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "key_value": true,
          "info": "Rules and Terms is used to store information about the rate offering. The rule number or rule/term identifies the rule being defined. For example, \"Rule 921\". "
        },
        "RULE_TITLE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Rule title provides a brief description of the rule being defined. For example, \"UNCLAIMED/ABANDONED FREIGHT\" "
        },
        "RULE_DESC": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Provides a place to store the description of the rule. For example, \"Freight that is undeliverable due to error or omission on the part of the shipper, consignee, or owner or for which no disposition instructions have been provided shall be considered unclaimed/abandoned.\" "
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
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};
