// OMR.js

window.OMR = {
  "tables": {
    "OMR": {
      "columns": {
        "OMR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "OMR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "OMR_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Name for this set of data"
},
        "OMR_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "DEMAND",
                    "SUPPLY"
          ]
},
        "PROCESS_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Indicates the time at which the information contained is current"
},
        "TIME_INTERVAL_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "W",
                    "F"
          ],
          "info": "'W': WINDOW; 'F': FLOW"
},
        "OMR_DESC": {
          "type": "VARCHAR2(255)",
          "nullable": true
},
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE"
},
        "OB_ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_ORDER_BASE"
},
        "PROCESS_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "ORDER_RELEASE",
                    "ORDER_BASE"
          ]
},
        "ORIGINAL_OMR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OMR"
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
      "fk_tables": [
        "OMR",
        "OMR_D",
        "OMR_STATUS"
]
    }
  }
};