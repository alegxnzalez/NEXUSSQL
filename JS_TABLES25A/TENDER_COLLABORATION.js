// TENDER_COLLABORATION.js

window.TENDER_COLLABORATION = {
  "tables": {
    "TENDER_COLLABORATION": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPMENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "TENDER_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "Ordinary",
            "Broadcast Tender",
            "Spot Bid"
          ],
          "info": "Defines the type of tender. Values are 'Ordinary', 'Broadcast Tender', and 'Spot Bid' "
        },
        "SHIPMENT_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "EXPECTED_RESPONSE": {
          "type": "DATE",
          "nullable": true
        },
        "ORIGIN_LOCATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion. "
        },
        "DESTINATION_LOCATION": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion. "
        },
        "DELIVERY_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "ORIGINAL_PICKUP_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "IS_TENDER_COUNT": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_GEO",
          "info": "References the rate record that that is associated with the tender. "
        },
        "PLANNED_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Copied planning cost from shipment. "
        },
        "PLANNED_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Copied planning cost from shipment in base units. "
        },
        "PLANNED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Unit of measure for the planned cost. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "PROCESS_CONTROL_REQUEST_ID": {
          "type": "NUMBER(12)",
          "nullable": true
        },
        "IS_STEP_TENDER": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "STEP_RESPONSE_TIME": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "STEP_RESPONSE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "STEP_RESPONSE_TIME_BASE": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "STEP_TENDER_PCR_ID": {
          "type": "NUMBER(12)",
          "nullable": true
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
        "EXPECTED_RESP_UPDATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Determines whether the expected response for the tender is updated. "
        },
        "MARKET_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Market cost based on the shipment. "
        },
        "MARKET_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Market cost based on the shipment in base units. "
        },
        "MARKET_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Units of measure for the market cost."
        }
      },
      "fk_tables": [
        "TENDER_COLLABORATION_STATUS"
      ]
    }
  }
};
