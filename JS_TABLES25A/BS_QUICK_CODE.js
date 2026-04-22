// BS_QUICK_CODE.js

window.BS_QUICK_CODE = {
  "tables": {
    "BS_QUICK_CODE": {
      "columns": {
        "BS_QUICK_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BS_QUICK_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "BS_QUICK_CODE_DESCRIPTION": {
          "type": "VARCHAR2(512)",
          "nullable": true
        },
        "BS_RESPONSIBLE_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_RESPONSIBLE_PARTY"
        },
        "BS_STATUS_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_GROUP"
        },
        "BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE"
        },
        "BS_REASON_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_GROUP"
        },
        "BS_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE"
        },
        "BS_REASON_COMMENT": {
          "type": "VARCHAR2(2000)",
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        },
        "IS_FOR_MOBILE_APP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Flag to display on mobile application "
        },
        "USE_FOR_ACTION_REASON": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Flag will be use to filter records on quick codes finder."
        }
      },
      "fk_tables": [
        "AGENT_ACTION_DETAILS",
        "AUDIT_TRAIL"
      ]
    }
  }
};
