// LANE_TENDER_INFO.js

window.LANE_TENDER_INFO = {
  "tables": {
    "LANE_TENDER_INFO": {
      "description": "table to hold lana specific tender information, such as tender response time.",
      "columns": {
        "LANE_TENDER_INFO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LANE_TENDER_INFO_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "X_LANE"
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV"
},
        "RESPONSE_TIME": {
          "type": "NUMBER(10)",
          "nullable": false
},
        "RESPONSE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "RESPONSE_TIME_BASE": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "TENDER_RESPONSE_CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR"
},
        "IS_ACCEPT_OPEN_TENDERS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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