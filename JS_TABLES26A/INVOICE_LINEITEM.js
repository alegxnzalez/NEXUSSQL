// INVOICE_LINEITEM.js

window.INVOICE_LINEITEM = {
  "tables": {
    "INVOICE_LINEITEM": {
      "description": "One record per line item within an invoice.   The line item has no direct relation to the S_SHIP_UNIT_LINE table, since invoice lines consist of a variety of things, including accessorial charges.",
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE",
          "info": "The GID for the invoice."
},
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "Line item sequence number."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Text describing the line item on the invoice."
},
        "UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Unit count for that line."
},
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The GID for the transport handling unit associated with the invoice line item."
},
        "BILLABLE_INDICATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BILLABLE_INDICATOR",
          "info": "The indicator used to tell if this line item is billable (sell side bill only)."
},
        "FLEX_COMMODITY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_QUAL",
          "info": "The flexible commodity qualifier GID."
},
        "FLEX_COMMODITY_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Flex commodity code."
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total weight for line item."
},
        "VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total volume for line item."
},
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Weight unit of measure."
},
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Volume unit of measure."
},
        "WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Weight in base units."
},
        "VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Volume in base units."
},
        "WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Weight qualifier."
},
        "MARKS": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Marks."
},
        "MARKS_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Qualifier for Marks."
},
        "BILLED_AS_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Qualifier for Billed as quantity."
},
        "BILLED_AS_QUANTITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Billed as quantity."
},
        "FREIGHT_RATE_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "The qualifier for the freight rate."
},
        "FREIGHT_RATE_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Freight rate value."
},
        "FREIGHT_RATE_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The freight rate value GID."
},
        "FREIGHT_RATE_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The freight rate value in base units."
},
        "FREIGHT_CHARGE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The freight charge for this line item."
},
        "FREIGHT_CHARGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The freight charge GID."
},
        "FREIGHT_CHARGE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The freight charge in base units."
},
        "PREPAID_AMOUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The amount that was already collected towards this invoice line item."
},
        "PREPAID_AMOUNT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The prepaid amount GID."
},
        "PREPAID_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The prepaid amount in base units."
},
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The GID for the method of payment for the invoice. Examples of payment include cash on delivery, check and electronic funds transfer."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The GID for an accessorial code."
},
        "ACCESSORIAL_DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Text to describe the accessorial."
},
        "COMPARTMENT_ID_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "The identification number for the equipment's compartment for this line item."
},
        "EXPORT_LIC_CONTROL_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Export license control code."
},
        "EXPORT_LIC_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The export license country code GID."
},
        "EXPORT_LIC_EXP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date on which the export license expires."
},
        "EXPORT_LIC_NUMBER": {
          "type": "VARCHAR2(12)",
          "nullable": true,
          "info": "The identification number for the export license."
},
        "IMPORT_LIC_EXP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date for the import license."
},
        "IMPORT_LIC_ISSUE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The issue date for the import license."
},
        "IMPORT_LIC_NUMBER": {
          "type": "VARCHAR2(12)",
          "nullable": true,
          "info": "The import license number."
},
        "TARIFF_AGENCY_CODE": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "The code for the tariff agency."
},
        "TARIFF_REFNUM": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Tariff reference number."
},
        "TARIFF_REFNUM_QUALIFIER": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "info": "Tariff reference number qualifier."
},
        "TARIFF_REFNUM_SUFFIX": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Suffix for the tariff reference number."
},
        "TARIFF_SECTION": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Tariff section."
},
        "TARIFF_ITEM_NUMBER": {
          "type": "VARCHAR2(16)",
          "nullable": true,
          "info": "Tariff item number."
},
        "TARIFF_ITEM_NUMBER_SUFFIX": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Tariff item number suffix."
},
        "TARIFF_ITEM_PART": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Tariff item part."
},
        "TARIFF_SUPPLEMENT_ID": {
          "type": "VARCHAR2(4)",
          "nullable": true,
          "info": "Tariff supplement ID."
},
        "TARIFF_REG_AGENCY_CODE": {
          "type": "VARCHAR2(5)",
          "nullable": true,
          "info": "Tariff Reg Agency."
},
        "TARIFF_PUB_AUTHORITY": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Tariff Pub Authority."
},
        "TARIFF_ISSUING_CARRIER_ID": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "The identification number for the carrier that issued the tariff."
},
        "TARIFF_FREIGHT_CLASS_CODE": {
          "type": "VARCHAR2(5)",
          "nullable": true,
          "info": "The code for the tariff freight class."
},
        "TARIFF_EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The effective date of the tariff."
},
        "DECLARED_VALUE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DECLARED_VALUE_QUAL",
          "info": "The declared value qualifier GID."
},
        "DECLARED_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The stated value of this line item."
},
        "DECLARED_VALUE_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The declared value currency GID."
},
        "DECLARED_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Declared value in base units."
},
        "ADJUSTMENT_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ADJUSTMENT_REASON",
          "info": "The GID for the adjustment reason code used to specify why an adjustment was made to the line."
},
        "PROCESS_AS_FLOW_THRU": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag to identify this cost was processed as a flow thru and needs to be considered during adjustments."
},
        "GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "GL code for the invoice line item."
},
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the date to be used for any currency conversions; if null, the latest conversion should be used."
},
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used"
},
        "VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VAT_CODE",
          "info": "Used by the invoice action to manually calculate VAT. This field is intended to be user entered (via UI or integration) so that a VAT code may be applied to an entire invoice line item easily without the user having to specify invoice line item VAT records. The system does not populate this field."
},
        "DECLARED_VALUE_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the declared value."
},
        "DECLARED_VALUE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID that qualifies the function currency for the declared value."
},
        "FREIGHT_CHARGE_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the freight charge."
},
        "FREIGHT_CHARGE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID that qualifies the function currency for the freight charge."
},
        "FREIGHT_RATE_V_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the freight rate."
},
        "FREIGHT_RATE_V_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID that qualifies the function currency for the freight rate."
},
        "PREPAID_AMOUNT_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The functional currency amount for the prepaid amount."
},
        "PREPAID_AMOUNT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID that qualifies the function currency for the prepaid amount."
},
        "COST_TYPE_GID": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "foreign_key": "COST_TYPE",
          "info": "The cost type for the invoice line."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "R",
                    "Y",
                    "G",
                    "W"
          ],
          "info": "The invoice line item indicator."
},
        "OUT_OF_TOL_AMT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The Out Of Tolerance Amount containing amount above or below the Payment Invoice Line approval tolerance allowable amount or percentage."
},
        "OUT_OF_TOL_AMT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The out of tolerance amount currency."
},
        "OUT_OF_TOL_AMT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The out of tolerance amount in base currency."
},
        "OUT_OF_TOL_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DIAG_PROCESS_FAILURE_REASON",
          "info": "The GID for the out of tolerance amount reason code."
},
        "DEVIATION_AMOUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The actual deviation in the tolerance amount based upon rule."
},
        "DEVIATION_AMOUNT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Deviation amount currency."
},
        "DEVIATION_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Deviation amount in base currency."
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_CURRENCY1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_CURRENCY1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101)"
},
        "ATTRIBUTE_CURRENCY1_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101)"
},
        "ATTRIBUTE_CURRENCY2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_CURRENCY2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101)"
},
        "ATTRIBUTE_CURRENCY2_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101)"
},
        "ATTRIBUTE_CURRENCY3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_CURRENCY3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101)"
},
        "ATTRIBUTE_CURRENCY3_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101)"
},
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "MATCH_STATUS": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Invoice line item status. UNMATCHED: It means the invoice line item has not been matched to any shipment cost. MATCHED: It means the invoice line item has been matched to shipment cost. MATCHED_IN_TOLERANCE: It means the invoice line item has been matched to shipment cost and passed the line level tolerance check. MATCHED_OUT_OF_TOLERANCE: It means the invoice line item has been matched to shipment cost and failed the line level tolerance check. UNMATCHED_IN_TOLERANCE: It means the invoice line item has not been matched to any shipment cost and it is within the tolerance limit. UNMATCHED_OUT_OF_TOLERANCE: It means the invoice line item has not been matched to any shipment cost and failed the line level tolerance check."
}
      },
      "fk_tables": [
        "ALLOCATION_OB_LINE_D",
        "ALLOCATION_OR_LINE_D",
        "INVOICE_LINEITEM_COST_REF",
        "INVOICE_LINEITEM_REFNUM",
        "INVOICE_LINEITEM_REMARK",
        "INVOICE_LINEITEM_VAT",
        "INVOICE_LI_COMMERCIAL_DATA",
        "VOUCHER_INVOICE_LINEITEM_JOIN"
]
    }
  }
};