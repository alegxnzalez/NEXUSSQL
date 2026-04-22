// DM_RULE_D.js

window.DM_RULE_D = {
  "tables": {
    "DM_RULE_D": {
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
        "DM_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DM_RULE",
          "info": "Demurrage Rule ID "
        },
        "DM_RULE_D_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "demurrage rule d seq no "
        },
        "ACTIVITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ACTIVITY_TYPE",
          "info": "Activity Type ID. Possible demurrage activity type are load-load, load-empty, empty-load, empty-empty-bad-asset, empty-empty-not-used-asset. "
        },
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "Determine the type of charge. Example could be Demurrage. These are modeled as special services. "
        },
        "FREE_DAYS_CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR",
          "info": "Free days calendar helps to capture the free days like weekends, holiday etc. This would not be considered to determine the debit days. "
        },
        "FREE_DAYS_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTIVITY",
          "info": "Free days Activity again which the free days are defined with the free days calendar. "
        },
        "FREE_DAYS_TO_LOAD": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "free days to load. "
        },
        "FREE_DAYS_TO_UNLOAD": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "free days to unload. "
        },
        "FREE_DAYS_TO_UNLOAD_RELOAD": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "free days to unload and reload. "
        },
        "FREE_DAYS_TO_SWITCH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "free days for own switching "
        },
        "SECONDARY_CHARGE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SECONDARY_CHARGE_RULE",
          "info": "charge the extended use of asset as secondary charge shipment. "
        },
        "START_BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "demurrage chargeable days start event (status code) ID. In the case of RR owned freight car, demurrage would typically start with the either constructive placement or actual placement events. "
        },
        "END_BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "demurrage chargeable days end event (status code) ID. In the case of RR owned freight car, demurrage would typically end with the released event. "
        },
        "CHARGE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "N",
            "I",
            "O",
            "S"
          ],
          "info": "Charge type, possible values are NFRC Shipment, Inbound Shipment, Outbound Shipment, Secondary Charge Shipment."
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING"
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO"
        },
        "START_STATUS_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "BS_STATUS_CODE_PROFILE"
        },
        "END_STATUS_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "BS_STATUS_CODE_PROFILE"
        },
        "OFFSET_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OFFSET_DEFINITION"
        }
      },
      "fk_tables": []
    }
  }
};
