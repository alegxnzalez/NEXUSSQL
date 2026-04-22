// AGENT_ACTION_DETAILS.js

window.AGENT_ACTION_DETAILS = {
  "tables": {
    "AGENT_ACTION_DETAILS": {
      "columns": {
        "AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AGENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ACTION_FLOW": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "Norm",
            "Err"
          ],
          "key_value": true
        },
        "ACTION_SEQUENCE": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true
        },
        "AGENT_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "AGENT_ACTION",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ACTION_PARAMETERS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BS_QUICK_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_QUICK_CODE"
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
        "DATA_TYPE_ASSOCIATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_TYPE_ASSOCIATION",
          "info": "A data type association gid defined at the agent action level.  If not null, the agent action will be performed on the objects returned by the data association."
        },
        "CREATE_NEW_PROCESS": {
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "AGENT_ACTION_STATS"
      ]
    }
  }
};
