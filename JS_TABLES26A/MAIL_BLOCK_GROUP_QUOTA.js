// MAIL_BLOCK_GROUP_QUOTA.js

window.MAIL_BLOCK_GROUP_QUOTA = {
  "tables": {
    "MAIL_BLOCK_GROUP_QUOTA": {
      "description": "Mail quota monitoring by priority group. Each record represents a five minute count of blocked e-mails.",
      "columns": {
        "MAIL_PRIORITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Mail priority group ID"
},
        "MAIL_BLOCK_QUOTA_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence for PK"
},
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "5-minute window start time"
},
        "COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "# of blocked e-mails in this window"
},
        "DROPPED_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "# of blocked, dropped e-mails in this window. These are e-mails that should have been persisted but the persistance count exceeded its performance threshold."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": true
},
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
}
      },
      "fk_tables": []
    }
  }
};