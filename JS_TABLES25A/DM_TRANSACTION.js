// DM_TRANSACTION.js

window.DM_TRANSACTION = {
  "tables": {
    "DM_TRANSACTION": {
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
        "DM_TRANSACTION_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "DM_TRANSACTION_SEQ_NO contains the unique identifier for the demurrage transaction. "
        },
        "EQUIPMENT_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Equipment Initial "
        },
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Equipment Number "
        },
        "EQUIPMENT_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Equipment Initial Number "
        },
        "AAR_CAR_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "AAR car type. "
        },
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "Equipment Type ID "
        },
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT",
          "info": "Equipment ID. Asset Instance. "
        },
        "EQUIPMENT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFNUM_QUAL"
        },
        "EQUIPMENT_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": true
        },
        "CHASSIS_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Chassis Initial "
        },
        "CHASSIS_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Chassis Number "
        },
        "CHASSIS_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Chassis Initial Number "
        },
        "DM_SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Demurrage SCAC ID. Service Provider. "
        },
        "DM_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "It is the location where the demurrage is determined. "
        },
        "DM_CITY": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DM_STATE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "DM_COUNTRY": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
        },
        "DM_SPLC_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DM_TIMEZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE"
        },
        "CP_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "constructive placement location. "
        },
        "CP_CITY": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "CP_STATE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "CP_COUNTRY": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
        },
        "CP_SPLC_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "CP_TIMEZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE"
        },
        "START_BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "demurrage transaction start event ID (status code). Example could be constructive placement etc. "
        },
        "START_SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "START_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
        },
        "START_CITY": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "START_STATE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "START_COUNTRY": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
        },
        "START_SPLC_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "START_TIMEZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE"
        },
        "START_IS_CAR_LOADED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Loaded or Empty "
        },
        "END_BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "demurrage transaction clock end event ID (status code). Example could be asset being released event etc. "
        },
        "END_SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "END_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
        },
        "END_CITY": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "END_STATE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "END_COUNTRY": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
        },
        "END_SPLC_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "END_TIMEZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE"
        },
        "END_IS_CAR_LOADED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IN_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT"
        },
        "IN_SEQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "S_EQUIPMENT"
        },
        "IN_STCC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STCC"
        },
        "IN_USER_DEFINED_COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_DEFINED_COMMODITY"
        },
        "OUT_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT"
        },
        "OUT_SEQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "S_EQUIPMENT"
        },
        "OUT_STCC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STCC"
        },
        "OUT_USER_DEFINED_COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_DEFINED_COMMODITY"
        },
        "IS_SYSTEM_GENERATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "ACTIVITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTIVITY_TYPE",
          "info": "Activity Type ID. Possible demurrage activity types are load-load, load-empty, empty-load, empty-empty-bad-asset, empty-empty-not-used-asset. "
        },
        "EVENT_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Event Date 1 "
        },
        "EVENT_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Event Date 2 "
        },
        "EVENT_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Event Date 3 "
        },
        "EVENT_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Event Date 4 "
        },
        "EVENT_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Event Date 5 "
        },
        "EVENT_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Event Date 6 "
        },
        "EVENT_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Event Date 7 "
        },
        "EVENT_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Event Date 8 "
        },
        "EVENT_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Event Date 9 "
        },
        "EVENT_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Event Date 10 "
        },
        "BS_STATUS_CODE1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status Code Related to Event Date 1 "
        },
        "BS_STATUS_CODE2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status Code Related to Event Date 2 "
        },
        "BS_STATUS_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status Code Related to Event Date 3 "
        },
        "BS_STATUS_CODE4_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status Code Related to Event Date 4 "
        },
        "BS_STATUS_CODE5_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status Code Related to Event Date 5 "
        },
        "BS_STATUS_CODE6_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status Code Related to Event Date 6 "
        },
        "BS_STATUS_CODE7_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status Code Related to Event Date 7 "
        },
        "BS_STATUS_CODE8_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status Code Related to Event Date 8 "
        },
        "BS_STATUS_CODE9_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status Code Related to Event Date 9 "
        },
        "BS_STATUS_CODE10_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status Code Related to Event Date 10 "
        },
        "IN_SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Inbound Shipment Source Location "
        },
        "OUT_SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Outbound Shipment Source Location "
        },
        "IN_DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Inbound Shipment Source Location "
        },
        "OUT_DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Outbound Shipment Destination Location "
        },
        "IN_SHIP_UNIT_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "First Item Ship Unit Count of  an Inbound Shipment "
        },
        "OUT_SHIP_UNIT_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "First Item Ship Unit Count of  an Outbound Shipment "
        },
        "IN_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "First Item Weight of an Inbound Shipment "
        },
        "IN_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "IN_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OUT_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "First Item Weight of an Outbound Shipment "
        },
        "OUT_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "OUT_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IN_PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM",
          "info": "First Packaged Item of an Inbound Shipment "
        },
        "OUT_PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM",
          "info": "First Packaged Item of an Outbound Shipment "
        },
        "IN_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "First Item of an Inbound Shipment "
        },
        "OUT_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "First Item of an Outbound Shipment "
        },
        "IN_THU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "First Item THU of an Inbound Shipment "
        },
        "OUT_THU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "First Item THU of an Outbound Shipment "
        },
        "MODE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "X",
            "R"
          ],
          "info": "Intermodal(X) / Rail(R) "
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Deemed /Actual End Date "
        },
        "DM_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DM_RULE",
          "info": "Demurrage Rule applied to calculate the charges."
        }
      },
      "fk_tables": [
        "DM_TRANSACTION_EVENT",
        "DM_TRANSACTION_INVOLVED_PARTY",
        "DM_TRANSACTION_LINEITEM",
        "DM_TRANSACTION_NOTE",
        "DM_TRANSACTION_REFNUM",
        "DM_TRANSACTION_REMARK",
        "DM_TRANSACTION_STATUS",
        "SS_DM_TRANSACTION"
      ]
    }
  }
};
