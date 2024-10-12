declare const AccountControllerActivateAccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
        };
        readonly required: readonly ["accountId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly accountId: {
                    readonly type: "string";
                    readonly description: "Account ID.";
                    readonly pattern: "^[LD]#[0-9]+$";
                    readonly examples: readonly ["L#617289"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the account.\n\n`ACTIVE` `RESTRICTED` `SUSPENDED`";
                    readonly enum: readonly ["ACTIVE", "RESTRICTED", "SUSPENDED"];
                    readonly examples: readonly ["ACTIVE"];
                };
            };
            readonly required: readonly ["accountId", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AccountControllerCancelAllOrders: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
        };
        readonly required: readonly ["accountId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly orderIdsOrderedToBeCanceled: {
                    readonly type: "array";
                    readonly description: "A list of orderIds which were ordered to be canceled. To make sure they were canceled - call `/orders/all` for this accountId";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["72057594038949120"];
                    };
                };
                readonly orderIdsFailedToCancel: {
                    readonly type: "array";
                    readonly description: "A list of orderIds whose cancellation has failed. To check if the system is in a consistent state - call `/orders/all` for this accountId.";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["72057594038949121"];
                    };
                };
            };
            readonly required: readonly ["orderIdsOrderedToBeCanceled", "orderIdsFailedToCancel"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AccountControllerChangeUserGroup: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
            readonly newGroupId: {
                readonly type: "string";
                readonly description: "ID of the new group for the account.";
                readonly examples: readonly ["621106"];
            };
        };
        readonly required: readonly ["accountId", "newGroupId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AccountControllerCloseAllPositions: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
        };
        readonly required: readonly ["accountId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly positionIdsOrderedToBeClosed: {
                    readonly type: "array";
                    readonly description: "A list of positionIds which were ordered to be closed. To make sure they were closed - call `/positions/get-open-positions` for this accountId";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["72057594038949120"];
                    };
                };
            };
            readonly required: readonly ["positionIdsOrderedToBeClosed"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AccountControllerCreateAccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly userId: {
                readonly type: "string";
                readonly description: "The ID of the user. (UUID)";
                readonly format: "uuid";
                readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
            };
            readonly accountName: {
                readonly type: "string";
                readonly description: "The name of the account.";
                readonly examples: readonly ["Main Account"];
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of the account to create.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "3 letter ISO 4217 code of the currency or ticker symbol for crypto asset of this account.";
                readonly minLength: 3;
                readonly maxLength: 10;
                readonly examples: readonly ["USD"];
            };
            readonly groupId: {
                readonly type: "string";
                readonly description: "ID of the group to place the account into. If not provided, placed into brand's default group.";
                readonly examples: readonly ["27495"];
            };
        };
        readonly required: readonly ["userId", "accountName", "type", "currency"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "Idempotency-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Idempotency key (must be a valid UUID)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly accountName: {
                    readonly type: "string";
                    readonly description: "The name of the account.";
                    readonly examples: readonly ["Main Account"];
                };
                readonly accountId: {
                    readonly type: "string";
                    readonly description: "Account ID.";
                    readonly pattern: "^[LD]#[0-9]+$";
                    readonly examples: readonly ["L#617289"];
                };
                readonly userId: {
                    readonly type: "string";
                    readonly description: "The ID of the user. (UUID)";
                    readonly format: "uuid";
                    readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
                };
                readonly userGroupId: {
                    readonly type: "string";
                    readonly description: "User group ID of the account.";
                    readonly examples: readonly ["618566"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of the account to create.\n\n`LIVE` `DEMO`";
                    readonly enum: readonly ["LIVE", "DEMO"];
                    readonly examples: readonly ["LIVE"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the account. If ACTIVE, trading could be disabled by a risk rule. Check the 'tradingDisabledReason' property.\n\n`ACTIVE` `RESTRICTED` `SUSPENDED`";
                    readonly enum: readonly ["ACTIVE", "RESTRICTED", "SUSPENDED"];
                    readonly examples: readonly ["ACTIVE"];
                };
                readonly tradingDisabledReason: {
                    readonly description: "The reason for trading being disabled. If null, trading is enabled.";
                    readonly type: readonly ["object", "null"];
                    readonly required: readonly ["type"];
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Reason for trading being disabled.\n\n`RISK_RULE`";
                            readonly enum: readonly ["RISK_RULE"];
                            readonly examples: readonly ["RISK_RULE"];
                        };
                    };
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "3 letter ISO 4217 code of the currency or ticker symbol for crypto asset of this account.";
                    readonly minLength: 3;
                    readonly maxLength: 10;
                    readonly examples: readonly ["USD"];
                };
                readonly leverage: {
                    readonly type: "string";
                    readonly description: "Leverage for the account.\n\n`50` `100` `200` `300` `400` `500`";
                    readonly enum: readonly ["50", "100", "200", "300", "400", "500"];
                    readonly examples: readonly ["100"];
                };
                readonly balance: {
                    readonly type: "string";
                    readonly description: "Current account balance.";
                    readonly examples: readonly ["3905.10"];
                };
                readonly blockedBalance: {
                    readonly type: "string";
                    readonly description: "Current account blocked balance.";
                    readonly examples: readonly ["500.00"];
                };
                readonly credit: {
                    readonly type: "string";
                    readonly description: "Current account credit.";
                    readonly examples: readonly ["1000.00"];
                };
                readonly equity: {
                    readonly type: "string";
                    readonly description: "Current account equity.";
                    readonly examples: readonly ["700.00"];
                };
                readonly pnl: {
                    readonly type: "string";
                    readonly description: "Current account pnl.";
                    readonly examples: readonly ["100.00"];
                };
                readonly marginAvailable: {
                    readonly type: "string";
                    readonly description: "Current account margin available.";
                    readonly examples: readonly ["2000.00"];
                };
                readonly marginUsed: {
                    readonly type: "string";
                    readonly description: "Current account margin used.";
                    readonly examples: readonly ["1800.00"];
                };
                readonly createdDateTime: {
                    readonly type: "string";
                    readonly description: "Date and time when the account was created.";
                    readonly examples: readonly ["2020-01-01T00:00:00.000Z"];
                };
            };
            readonly required: readonly ["accountName", "accountId", "userId", "userGroupId", "type", "status", "tradingDisabledReason", "currency", "balance", "blockedBalance", "credit", "equity", "pnl", "marginAvailable", "marginUsed", "createdDateTime"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly "Idempotent-Replayed": {
                    readonly type: "boolean";
                    readonly description: "Header that will be returned if the response was served from idempotency cache (initial execution response)";
                };
            };
        };
    };
};
declare const AccountControllerGetAccountDetails: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
        };
        readonly required: readonly ["accountId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly accountName: {
                    readonly type: "string";
                    readonly description: "The name of the account.";
                    readonly examples: readonly ["Main Account"];
                };
                readonly accountId: {
                    readonly type: "string";
                    readonly description: "Account ID.";
                    readonly pattern: "^[LD]#[0-9]+$";
                    readonly examples: readonly ["L#617289"];
                };
                readonly userId: {
                    readonly type: "string";
                    readonly description: "The ID of the user. (UUID)";
                    readonly format: "uuid";
                    readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
                };
                readonly userGroupId: {
                    readonly type: "string";
                    readonly description: "User group ID of the account.";
                    readonly examples: readonly ["618566"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of the account to create.\n\n`LIVE` `DEMO`";
                    readonly enum: readonly ["LIVE", "DEMO"];
                    readonly examples: readonly ["LIVE"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the account. If ACTIVE, trading could be disabled by a risk rule. Check the 'tradingDisabledReason' property.\n\n`ACTIVE` `RESTRICTED` `SUSPENDED`";
                    readonly enum: readonly ["ACTIVE", "RESTRICTED", "SUSPENDED"];
                    readonly examples: readonly ["ACTIVE"];
                };
                readonly tradingDisabledReason: {
                    readonly description: "The reason for trading being disabled. If null, trading is enabled.";
                    readonly type: readonly ["object", "null"];
                    readonly required: readonly ["type"];
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Reason for trading being disabled.\n\n`RISK_RULE`";
                            readonly enum: readonly ["RISK_RULE"];
                            readonly examples: readonly ["RISK_RULE"];
                        };
                    };
                };
                readonly currency: {
                    readonly type: "string";
                    readonly description: "3 letter ISO 4217 code of the currency or ticker symbol for crypto asset of this account.";
                    readonly minLength: 3;
                    readonly maxLength: 10;
                    readonly examples: readonly ["USD"];
                };
                readonly leverage: {
                    readonly type: "string";
                    readonly description: "Leverage for the account.\n\n`50` `100` `200` `300` `400` `500`";
                    readonly enum: readonly ["50", "100", "200", "300", "400", "500"];
                    readonly examples: readonly ["100"];
                };
                readonly balance: {
                    readonly type: "string";
                    readonly description: "Current account balance.";
                    readonly examples: readonly ["3905.10"];
                };
                readonly blockedBalance: {
                    readonly type: "string";
                    readonly description: "Current account blocked balance.";
                    readonly examples: readonly ["500.00"];
                };
                readonly credit: {
                    readonly type: "string";
                    readonly description: "Current account credit.";
                    readonly examples: readonly ["1000.00"];
                };
                readonly equity: {
                    readonly type: "string";
                    readonly description: "Current account equity.";
                    readonly examples: readonly ["700.00"];
                };
                readonly pnl: {
                    readonly type: "string";
                    readonly description: "Current account pnl.";
                    readonly examples: readonly ["100.00"];
                };
                readonly marginAvailable: {
                    readonly type: "string";
                    readonly description: "Current account margin available.";
                    readonly examples: readonly ["2000.00"];
                };
                readonly marginUsed: {
                    readonly type: "string";
                    readonly description: "Current account margin used.";
                    readonly examples: readonly ["1800.00"];
                };
                readonly createdDateTime: {
                    readonly type: "string";
                    readonly description: "Date and time when the account was created.";
                    readonly examples: readonly ["2020-01-01T00:00:00.000Z"];
                };
            };
            readonly required: readonly ["accountName", "accountId", "userId", "userGroupId", "type", "status", "tradingDisabledReason", "currency", "balance", "blockedBalance", "credit", "equity", "pnl", "marginAvailable", "marginUsed", "createdDateTime"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AccountControllerGetAccounts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly userId: {
                readonly type: "string";
                readonly description: "The ID of the user. (UUID)";
                readonly format: "uuid";
                readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
            };
        };
        readonly required: readonly ["userId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly accountName: {
                                readonly type: "string";
                                readonly description: "The name of the account.";
                                readonly examples: readonly ["Main Account"];
                            };
                            readonly accountId: {
                                readonly type: "string";
                                readonly description: "Account ID.";
                                readonly pattern: "^[LD]#[0-9]+$";
                                readonly examples: readonly ["L#617289"];
                            };
                            readonly userId: {
                                readonly type: "string";
                                readonly description: "The ID of the user. (UUID)";
                                readonly format: "uuid";
                                readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
                            };
                            readonly userGroupId: {
                                readonly type: "string";
                                readonly description: "User group ID of the account.";
                                readonly examples: readonly ["618566"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the account to create.\n\n`LIVE` `DEMO`";
                                readonly enum: readonly ["LIVE", "DEMO"];
                                readonly examples: readonly ["LIVE"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status of the account. If ACTIVE, trading could be disabled by a risk rule. Check the 'tradingDisabledReason' property.\n\n`ACTIVE` `RESTRICTED` `SUSPENDED`";
                                readonly enum: readonly ["ACTIVE", "RESTRICTED", "SUSPENDED"];
                                readonly examples: readonly ["ACTIVE"];
                            };
                            readonly tradingDisabledReason: {
                                readonly description: "The reason for trading being disabled. If null, trading is enabled.";
                                readonly type: readonly ["object", "null"];
                                readonly required: readonly ["type"];
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Reason for trading being disabled.\n\n`RISK_RULE`";
                                        readonly enum: readonly ["RISK_RULE"];
                                        readonly examples: readonly ["RISK_RULE"];
                                    };
                                };
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "3 letter ISO 4217 code of the currency or ticker symbol for crypto asset of this account.";
                                readonly minLength: 3;
                                readonly maxLength: 10;
                                readonly examples: readonly ["USD"];
                            };
                            readonly leverage: {
                                readonly type: "string";
                                readonly description: "Leverage for the account.\n\n`50` `100` `200` `300` `400` `500`";
                                readonly enum: readonly ["50", "100", "200", "300", "400", "500"];
                                readonly examples: readonly ["100"];
                            };
                            readonly balance: {
                                readonly type: "string";
                                readonly description: "Current account balance.";
                                readonly examples: readonly ["3905.10"];
                            };
                            readonly blockedBalance: {
                                readonly type: "string";
                                readonly description: "Current account blocked balance.";
                                readonly examples: readonly ["500.00"];
                            };
                            readonly credit: {
                                readonly type: "string";
                                readonly description: "Current account credit.";
                                readonly examples: readonly ["1000.00"];
                            };
                            readonly equity: {
                                readonly type: "string";
                                readonly description: "Current account equity.";
                                readonly examples: readonly ["700.00"];
                            };
                            readonly pnl: {
                                readonly type: "string";
                                readonly description: "Current account pnl.";
                                readonly examples: readonly ["100.00"];
                            };
                            readonly marginAvailable: {
                                readonly type: "string";
                                readonly description: "Current account margin available.";
                                readonly examples: readonly ["2000.00"];
                            };
                            readonly marginUsed: {
                                readonly type: "string";
                                readonly description: "Current account margin used.";
                                readonly examples: readonly ["1800.00"];
                            };
                            readonly createdDateTime: {
                                readonly type: "string";
                                readonly description: "Date and time when the account was created.";
                                readonly examples: readonly ["2020-01-01T00:00:00.000Z"];
                            };
                        };
                        readonly required: readonly ["accountName", "accountId", "userId", "userGroupId", "type", "status", "tradingDisabledReason", "currency", "balance", "blockedBalance", "credit", "equity", "pnl", "marginAvailable", "marginUsed", "createdDateTime"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AccountControllerGetAllAccountsForBrand: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly offset: {
                readonly type: "number";
                readonly description: "Offset the results by specified number.";
                readonly format: "int32";
                readonly minimum: 0;
                readonly default: 0;
                readonly examples: readonly [2000];
                readonly maximum: 2147483647;
            };
            readonly limit: {
                readonly type: "number";
                readonly description: "Limit the number of return results.";
                readonly format: "int32";
                readonly minimum: 1;
                readonly maximum: 100000;
                readonly default: 10000;
                readonly examples: readonly [1000];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly accountName: {
                                readonly type: "string";
                                readonly description: "The name of the account.";
                                readonly examples: readonly ["Main Account"];
                            };
                            readonly accountId: {
                                readonly type: "string";
                                readonly description: "Account ID.";
                                readonly pattern: "^[LD]#[0-9]+$";
                                readonly examples: readonly ["L#617289"];
                            };
                            readonly userId: {
                                readonly type: "string";
                                readonly description: "The ID of the user. (UUID)";
                                readonly format: "uuid";
                                readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the account to create.\n\n`LIVE` `DEMO`";
                                readonly enum: readonly ["LIVE", "DEMO"];
                                readonly examples: readonly ["LIVE"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status of the account.\n\n`ACTIVE` `RESTRICTED` `SUSPENDED`";
                                readonly enum: readonly ["ACTIVE", "RESTRICTED", "SUSPENDED"];
                                readonly examples: readonly ["ACTIVE"];
                            };
                        };
                        readonly required: readonly ["accountName", "accountId", "userId", "type", "status"];
                    };
                };
                readonly hasMore: {
                    readonly type: "boolean";
                };
            };
            readonly required: readonly ["data", "hasMore"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AccountControllerRestrictAccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
        };
        readonly required: readonly ["accountId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly accountId: {
                    readonly type: "string";
                    readonly description: "Account ID.";
                    readonly pattern: "^[LD]#[0-9]+$";
                    readonly examples: readonly ["L#617289"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the account.\n\n`ACTIVE` `RESTRICTED` `SUSPENDED`";
                    readonly enum: readonly ["ACTIVE", "RESTRICTED", "SUSPENDED"];
                    readonly examples: readonly ["ACTIVE"];
                };
            };
            readonly required: readonly ["accountId", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AccountControllerSuspendAccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
        };
        readonly required: readonly ["accountId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly accountId: {
                    readonly type: "string";
                    readonly description: "Account ID.";
                    readonly pattern: "^[LD]#[0-9]+$";
                    readonly examples: readonly ["L#617289"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the account.\n\n`ACTIVE` `RESTRICTED` `SUSPENDED`";
                    readonly enum: readonly ["ACTIVE", "RESTRICTED", "SUSPENDED"];
                    readonly examples: readonly ["ACTIVE"];
                };
            };
            readonly required: readonly ["accountId", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AccountOperationsControllerAddCreditToAccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
            readonly amount: {
                readonly type: "string";
                readonly description: "Amount of the operation. Positive to add, negative to subtract.";
                readonly examples: readonly ["100.20"];
            };
            readonly note: {
                readonly type: "string";
                readonly description: "Account operation note.";
                readonly maxLength: 255;
                readonly examples: readonly ["Internal Transfer"];
            };
        };
        readonly required: readonly ["accountId", "amount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "Idempotency-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Idempotency key (must be a valid UUID)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly operationId: {
                    readonly type: "string";
                    readonly description: "Account operation ID";
                    readonly examples: readonly ["72057594039577496"];
                };
            };
            readonly required: readonly ["operationId"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly "Idempotent-Replayed": {
                    readonly type: "boolean";
                    readonly description: "Header that will be returned if the response was served from idempotency cache (initial execution response)";
                };
            };
        };
    };
};
declare const AccountOperationsControllerDepositToAccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
            readonly amount: {
                readonly type: "string";
                readonly description: "Amount of the operation. Must be positive.";
                readonly examples: readonly ["100.20"];
            };
            readonly note: {
                readonly type: "string";
                readonly description: "Account operation note.";
                readonly maxLength: 255;
                readonly examples: readonly ["Internal Transfer"];
            };
        };
        readonly required: readonly ["accountId", "amount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "Idempotency-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Idempotency key (must be a valid UUID)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly operationId: {
                    readonly type: "string";
                    readonly description: "Account operation ID";
                    readonly examples: readonly ["72057594039577496"];
                };
            };
            readonly required: readonly ["operationId"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly "Idempotent-Replayed": {
                    readonly type: "boolean";
                    readonly description: "Header that will be returned if the response was served from idempotency cache (initial execution response)";
                };
            };
        };
    };
};
declare const AccountOperationsControllerWithdrawFromAccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
            readonly amount: {
                readonly type: "string";
                readonly description: "Amount of the operation. Must be positive.";
                readonly examples: readonly ["100.20"];
            };
            readonly note: {
                readonly type: "string";
                readonly description: "Account operation note.";
                readonly maxLength: 255;
                readonly examples: readonly ["Internal Transfer"];
            };
        };
        readonly required: readonly ["accountId", "amount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "Idempotency-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Idempotency key (must be a valid UUID)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly operationId: {
                    readonly type: "string";
                    readonly description: "Account operation ID";
                    readonly examples: readonly ["72057594039577496"];
                };
            };
            readonly required: readonly ["operationId"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly "Idempotent-Replayed": {
                    readonly type: "boolean";
                    readonly description: "Header that will be returned if the response was served from idempotency cache (initial execution response)";
                };
            };
        };
    };
};
declare const BrandControllerGetActiveAccountsByDay: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly forDate: {
                readonly type: "string";
                readonly description: "Activity for set date. ISO format YYYY-MM-DD. All dates are in UTC.";
                readonly examples: readonly ["2024-09-01"];
            };
            readonly returnType: {
                readonly type: "string";
                readonly enum: readonly ["json", "csv"];
                readonly default: "json";
                readonly description: "Return data as Json or binary CSV.\n\nDefault: `json`";
            };
        };
        readonly required: readonly ["forDate", "returnType"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly forDateTime: {
                    readonly type: "string";
                    readonly description: "Activity for set date in UTC ISO format.";
                    readonly examples: readonly ["2021-01-01T00:00:00.000Z"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly accountId: {
                                readonly type: "string";
                                readonly description: "Account ID without L#/D# type prefix.";
                                readonly examples: readonly ["123456"];
                            };
                            readonly login: {
                                readonly type: "string";
                                readonly description: "Account login";
                                readonly examples: readonly ["DEMO#64538631ff8f5c0012ef79ae#1"];
                            };
                            readonly group: {
                                readonly type: "string";
                                readonly description: "Account group";
                                readonly examples: readonly ["DEMO-PROP"];
                            };
                            readonly sessions: {
                                readonly type: "number";
                                readonly description: "Number of days with open sessions for selected date.";
                                readonly examples: readonly [3];
                            };
                            readonly events: {
                                readonly type: "number";
                                readonly description: "Number of events for selected date range.";
                                readonly examples: readonly [33];
                            };
                            readonly accounts: {
                                readonly type: "number";
                                readonly description: "Number of days with account creation.";
                                readonly examples: readonly [1];
                            };
                            readonly openPositions: {
                                readonly type: "number";
                                readonly description: "Number of days with open positions.";
                                readonly examples: readonly [13];
                            };
                            readonly orders: {
                                readonly type: "number";
                                readonly description: "Number of days with open orders.";
                                readonly examples: readonly [3];
                            };
                        };
                        readonly required: readonly ["accountId", "login", "group", "sessions", "events", "accounts", "openPositions", "orders"];
                    };
                };
            };
            readonly required: readonly ["forDateTime", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const BrandControllerGetActiveAccountsByMonth: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly forMonth: {
                readonly type: "string";
                readonly description: "Activity for set month. ISO format YYYY-MM. All dates are in UTC.";
                readonly examples: readonly ["2021-08"];
            };
            readonly returnType: {
                readonly type: "string";
                readonly enum: readonly ["json", "csv"];
                readonly default: "json";
                readonly description: "Return data as Json or binary CSV.\n\nDefault: `json`";
            };
        };
        readonly required: readonly ["forMonth", "returnType"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly forDateTime: {
                    readonly type: "string";
                    readonly description: "Activity for set date in UTC ISO format.";
                    readonly examples: readonly ["2021-01-01T00:00:00.000Z"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly accountId: {
                                readonly type: "string";
                                readonly description: "Account ID without L#/D# type prefix.";
                                readonly examples: readonly ["123456"];
                            };
                            readonly login: {
                                readonly type: "string";
                                readonly description: "Account login";
                                readonly examples: readonly ["DEMO#64538631ff8f5c0012ef79ae#1"];
                            };
                            readonly group: {
                                readonly type: "string";
                                readonly description: "Account group";
                                readonly examples: readonly ["DEMO-PROP"];
                            };
                            readonly sessions: {
                                readonly type: "number";
                                readonly description: "Number of days with open sessions for selected date.";
                                readonly examples: readonly [3];
                            };
                            readonly events: {
                                readonly type: "number";
                                readonly description: "Number of events for selected date range.";
                                readonly examples: readonly [33];
                            };
                            readonly accounts: {
                                readonly type: "number";
                                readonly description: "Number of days with account creation.";
                                readonly examples: readonly [1];
                            };
                            readonly openPositions: {
                                readonly type: "number";
                                readonly description: "Number of days with open positions.";
                                readonly examples: readonly [13];
                            };
                            readonly orders: {
                                readonly type: "number";
                                readonly description: "Number of days with open orders.";
                                readonly examples: readonly [3];
                            };
                        };
                        readonly required: readonly ["accountId", "login", "group", "sessions", "events", "accounts", "openPositions", "orders"];
                    };
                };
            };
            readonly required: readonly ["forDateTime", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const BrandControllerGetAssets: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly type: {
                readonly type: "string";
                readonly description: "Type of the account environment to fetch for.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
        };
        readonly required: readonly ["type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly description: "ID of the asset.";
                                readonly examples: readonly [203];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the asset.";
                                readonly examples: readonly ["ADA"];
                            };
                        };
                        readonly required: readonly ["id", "name"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const BrandControllerGetInstruments: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly type: {
                readonly type: "string";
                readonly description: "Type of the account environment to fetch for.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
        };
        readonly required: readonly ["type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the instrument.";
                                readonly examples: readonly ["ADAUSD"];
                            };
                            readonly lotSize: {
                                readonly type: "number";
                                readonly description: "Lot size for the instrument.";
                                readonly examples: readonly [100];
                            };
                        };
                        readonly required: readonly ["name", "lotSize"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GroupsControllerGetGroups: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly type: {
                readonly type: "string";
                readonly description: "Type of account environment to fetch the available groups for.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
        };
        readonly required: readonly ["type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the group.";
                                readonly examples: readonly ["27495"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the group.";
                                readonly examples: readonly ["FXBR-GEN"];
                            };
                        };
                        readonly required: readonly ["id", "name"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const HomeControllerAlive: {
    readonly response: {
        readonly "200": {
            readonly type: "number";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const HomeControllerReadonly: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ok"];
                };
                readonly info: {
                    readonly type: readonly ["object", "null"];
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
                readonly error: {
                    readonly type: readonly ["object", "null"];
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
                readonly details: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly info: {
                    readonly type: readonly ["object", "null"];
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
                readonly error: {
                    readonly type: readonly ["object", "null"];
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
                readonly details: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrdersControllerCancelOrder: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly orderId: {
                readonly type: "string";
                readonly description: "The ID of the order.";
                readonly examples: readonly ["72057594041239756"];
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of the account to cancel the order for.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
        };
        readonly required: readonly ["orderId", "type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrdersControllerGetAllOrders: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
            readonly offset: {
                readonly type: "number";
                readonly description: "Defines the initial index number of outputting records.";
                readonly default: 0;
                readonly format: "int32";
                readonly examples: readonly [3000];
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly limit: {
                readonly type: "number";
                readonly description: "Defines the maximum number of records to fetch.";
                readonly default: 1000;
                readonly format: "int32";
                readonly examples: readonly [2000];
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of the account environment to get orders for.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
        };
        readonly required: readonly ["type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly accountId: {
                                readonly type: "string";
                                readonly description: "Account ID.";
                                readonly pattern: "^[LD]#[0-9]+$";
                                readonly examples: readonly ["L#617289"];
                            };
                            readonly amount: {
                                readonly type: "string";
                                readonly description: "Amount of the order.";
                            };
                            readonly lotSize: {
                                readonly type: "string";
                                readonly description: "Units per lot.";
                                readonly examples: readonly ["100000"];
                            };
                            readonly averageFilledPrice: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Average filled price of the order.";
                            };
                            readonly createdTime: {
                                readonly type: "number";
                                readonly deprecated: true;
                                readonly description: "Date of the order creation as UTC timestamp with milliseconds.";
                                readonly examples: readonly [1708696739441];
                            };
                            readonly createdDateTime: {
                                readonly type: "string";
                                readonly description: "Date of the order creation in ISO date format.";
                                readonly examples: readonly ["2021-06-01T12:00:00.000Z"];
                            };
                            readonly expireTime: {
                                readonly type: readonly ["number", "null"];
                                readonly deprecated: true;
                                readonly description: "Date of the order expiration as UTC timestamp with milliseconds.";
                                readonly examples: readonly [1708696739441];
                            };
                            readonly expireDateTime: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Date of the order creation in ISO date format.";
                                readonly examples: readonly ["2021-06-01T12:00:00.000Z"];
                            };
                            readonly filledAmount: {
                                readonly type: "string";
                                readonly description: "Filled amount of the order.";
                                readonly format: "decimal";
                            };
                            readonly orderId: {
                                readonly type: "string";
                                readonly description: "ID of the order.";
                                readonly examples: readonly ["72057594041239770"];
                            };
                            readonly positionId: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "ID of the position.";
                                readonly examples: readonly ["72057594038933828"];
                            };
                            readonly price: {
                                readonly type: "string";
                                readonly description: "Price of the order.";
                            };
                            readonly side: {
                                readonly type: "string";
                                readonly description: "Side of the order.\n\n`BUY` `SELL` `SHORT_SELL` `BUY_TO_COVER`";
                                readonly enum: readonly ["BUY", "SELL", "SHORT_SELL", "BUY_TO_COVER"];
                            };
                            readonly slLimitPrice: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Stop Loss limit price of the order.";
                            };
                            readonly slPrice: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Stop Loss price of the order.";
                            };
                            readonly slPriceType: {
                                readonly type: "string";
                                readonly description: "Stop Loss price type of the order.\n\n`ABSOLUTE` `OFFSET` `TRAILING_STOP_OFFSET`";
                                readonly enum: readonly ["ABSOLUTE", "OFFSET", "TRAILING_STOP_OFFSET"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Status of the order.\n\n`STATUS_NONE` `STATUS_PENDING_NEW` `STATUS_PENDING_EXECUTION` `STATUS_PENDING_CANCEL` `STATUS_PENDING_REPLACE` `STATUS_PENDING_REPLACE_NOT_ACTIVE` `STATUS_NEW` `STATUS_ACCEPTED` `STATUS_REPLACED` `STATUS_PART_FILLED` `STATUS_FILLED` `STATUS_CANCELED` `STATUS_REFUSED` `STATUS_RESTATED` `EXEC_TYPE_ACTIVATED` `STATUS_WAITING_MARKET` `STATUS_OFF_MARKET` `STATUS_UNPLACED` `STATUS_REMOVED` `STATUS_MODIFY_TRADING_MODE`";
                                readonly enum: readonly ["STATUS_NONE", "STATUS_PENDING_NEW", "STATUS_PENDING_EXECUTION", "STATUS_PENDING_CANCEL", "STATUS_PENDING_REPLACE", "STATUS_PENDING_REPLACE_NOT_ACTIVE", "STATUS_NEW", "STATUS_ACCEPTED", "STATUS_REPLACED", "STATUS_PART_FILLED", "STATUS_FILLED", "STATUS_CANCELED", "STATUS_REFUSED", "STATUS_RESTATED", "EXEC_TYPE_ACTIVATED", "STATUS_WAITING_MARKET", "STATUS_OFF_MARKET", "STATUS_UNPLACED", "STATUS_REMOVED", "STATUS_MODIFY_TRADING_MODE"];
                            };
                            readonly stopPrice: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Stop price of the order.";
                            };
                            readonly tif: {
                                readonly type: "string";
                                readonly description: "Time-in-force of the order.\n\n`DAY` `GTC` `IOC` `GTD` `FOK` `MOO` `MOC` `GTS`";
                                readonly enum: readonly ["DAY", "GTC", "IOC", "GTD", "FOK", "MOO", "MOC", "GTS"];
                            };
                            readonly tpPrice: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Take Profit price of the order.";
                            };
                            readonly tpPriceType: {
                                readonly type: "string";
                                readonly description: "Take Profit price type of the order.\n\n`ABSOLUTE` `OFFSET` `TRAILING_STOP_OFFSET`";
                                readonly enum: readonly ["ABSOLUTE", "OFFSET", "TRAILING_STOP_OFFSET"];
                            };
                            readonly instrument: {
                                readonly type: "string";
                                readonly description: "Instrument name.";
                                readonly examples: readonly ["EURUSD"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of the order.\n\n`MANUAL` `MARKET` `STOP` `LIMIT` `STOP_LIMIT` `TRAILING_STOP`";
                                readonly enum: readonly ["MANUAL", "MARKET", "STOP", "LIMIT", "STOP_LIMIT", "TRAILING_STOP"];
                            };
                        };
                        readonly required: readonly ["accountId", "amount", "lotSize", "averageFilledPrice", "createdTime", "createdDateTime", "expireTime", "expireDateTime", "filledAmount", "orderId", "positionId", "price", "side", "slLimitPrice", "slPrice", "slPriceType", "status", "stopPrice", "tif", "tpPrice", "tpPriceType", "instrument", "type"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PositionsControllerClosePosition: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly positionId: {
                readonly type: "string";
                readonly description: "ID of the position.";
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of the account to close the position for.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
        };
        readonly required: readonly ["positionId", "type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PositionsControllerGetOpenPositions: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly type: {
                readonly type: "string";
                readonly description: "Type of accounts to fetch the open positions for.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
        };
        readonly required: readonly ["type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly positionId: {
                                readonly type: "string";
                                readonly description: "ID of the position.";
                                readonly examples: readonly ["72057594038933828"];
                            };
                            readonly accountId: {
                                readonly type: "string";
                                readonly description: "Account ID.";
                                readonly pattern: "^[LD]#[0-9]+$";
                                readonly examples: readonly ["L#617289"];
                            };
                            readonly lots: {
                                readonly type: "string";
                                readonly description: "Position size expressed in lots.";
                                readonly examples: readonly ["0.01"];
                            };
                            readonly lotSize: {
                                readonly type: "string";
                                readonly description: "Units per lot.";
                                readonly examples: readonly ["100000"];
                            };
                            readonly units: {
                                readonly type: "string";
                                readonly description: "Position size expressed in units. units = lots * lotSize.";
                                readonly examples: readonly ["1000"];
                            };
                            readonly openTime: {
                                readonly type: "number";
                                readonly deprecated: true;
                                readonly description: "Date and time of the position open as UTC timestamp with milliseconds.";
                                readonly examples: readonly [1708696739441];
                            };
                            readonly openDateTime: {
                                readonly type: "string";
                                readonly description: "Date and time of the position open.";
                                readonly examples: readonly ["2021-06-01T12:00:00.000Z"];
                            };
                            readonly pnl: {
                                readonly type: "string";
                                readonly description: "Profit & Loss.";
                                readonly examples: readonly ["200.12"];
                            };
                            readonly swap: {
                                readonly type: "string";
                                readonly description: "Swap.";
                                readonly examples: readonly ["-13.08"];
                            };
                            readonly slPrice: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Stop loss price.";
                                readonly examples: readonly ["1.08166"];
                            };
                            readonly tpPrice: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Take profit price.";
                                readonly examples: readonly ["1.08318"];
                            };
                            readonly openPrice: {
                                readonly type: "string";
                                readonly description: "Open price of the position.";
                                readonly examples: readonly ["1.0822"];
                            };
                            readonly side: {
                                readonly type: "string";
                                readonly description: "Side of the position.\n\n`BUY` `SELL` `SHORT_SELL` `BUY_TO_COVER`";
                                readonly enum: readonly ["BUY", "SELL", "SHORT_SELL", "BUY_TO_COVER"];
                                readonly examples: readonly ["BUY"];
                            };
                            readonly instrument: {
                                readonly type: "string";
                                readonly description: "Instrument name.";
                                readonly examples: readonly ["EURUSD"];
                            };
                        };
                        readonly required: readonly ["positionId", "accountId", "lots", "lotSize", "units", "openTime", "openDateTime", "pnl", "swap", "slPrice", "tpPrice", "openPrice", "side", "instrument"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ReportsControllerGetAccountOperationsHistory: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of accounts to fetch the close trades events.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
            readonly startDateTime: {
                readonly type: "string";
                readonly description: "Start time in ISO format.";
                readonly examples: readonly ["2021-12-31T23:59:59.999Z"];
            };
            readonly endDateTime: {
                readonly type: "string";
                readonly description: "End time in ISO format.";
                readonly examples: readonly ["2021-12-31T23:59:59.999Z"];
            };
            readonly operationTypes: {
                readonly type: "array";
                readonly description: "Array of operation type strings";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["TRADING", "DEPOSIT", "WITHDRAW", "COMMISSION", "SWAP", "BLOCKING", "UNBLOCKING", "ADJUSTMENT", "SPREAD", "CREDIT", "BALANCE_CREDIT"];
                };
            };
        };
        readonly required: readonly ["accountId", "type", "startDateTime", "endDateTime"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly dateTime: {
                                readonly type: "string";
                                readonly description: "Date time in ISO format.";
                                readonly examples: readonly ["2021-12-31T23:59:59.999Z"];
                            };
                            readonly operationTypeId: {
                                readonly type: "string";
                                readonly enum: readonly ["1", "2", "3", "4", "5", "7", "8", "12", "18", "19", "100"];
                                readonly description: "The id of the operation type.\n\n`1` `2` `3` `4` `5` `7` `8` `12` `18` `19` `100`";
                            };
                            readonly operationTypeName: {
                                readonly type: "string";
                                readonly enum: readonly ["TRADING", "DEPOSIT", "WITHDRAW", "COMMISSION", "SWAP", "BLOCKING", "UNBLOCKING", "ADJUSTMENT", "SPREAD", "CREDIT", "BALANCE_CREDIT"];
                                readonly description: "The name of the operation type.\n\n`TRADING` `DEPOSIT` `WITHDRAW` `COMMISSION` `SWAP` `BLOCKING` `UNBLOCKING` `ADJUSTMENT` `SPREAD` `CREDIT` `BALANCE_CREDIT`";
                            };
                            readonly balanceChange: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly resultingBalance: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly amount: {
                                readonly type: readonly ["string", "null"];
                                readonly format: "number";
                            };
                        };
                        readonly required: readonly ["id", "dateTime", "operationTypeId", "operationTypeName", "balanceChange", "resultingBalance", "amount"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ReportsControllerGetAccountStatementReport: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly type: {
                readonly type: "string";
                readonly description: "Type of accounts to fetch.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
            readonly accountIds: {
                readonly type: "array";
                readonly description: "Account IDs to fetch.";
                readonly items: {
                    readonly type: "string";
                    readonly examples: readonly ["L#123456"];
                };
            };
            readonly accountStatus: {
                readonly type: "string";
                readonly description: "Status of accounts to fetch.";
                readonly enum: readonly ["ACTIVE", "RESTRICTED", "SUSPENDED"];
                readonly examples: readonly ["ACTIVE"];
            };
        };
        readonly required: readonly ["type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly accountId: {
                                readonly type: "string";
                                readonly description: "Account ID.";
                                readonly pattern: "^[LD]#[0-9]+$";
                                readonly examples: readonly ["L#617289"];
                            };
                            readonly balance: {
                                readonly type: "string";
                                readonly description: "Current account balance.";
                                readonly examples: readonly ["9838.32"];
                            };
                            readonly credit: {
                                readonly type: "string";
                                readonly description: "Current account credit.";
                                readonly examples: readonly ["100.00"];
                            };
                            readonly equity: {
                                readonly type: "string";
                                readonly description: "Current account equity.";
                                readonly examples: readonly ["10365.11"];
                            };
                            readonly pnl: {
                                readonly type: "string";
                                readonly description: "Current account profit & loss.";
                                readonly examples: readonly ["426.79"];
                            };
                            readonly marginUsed: {
                                readonly type: "string";
                                readonly description: "Current account used margin.";
                                readonly examples: readonly ["6033.21"];
                            };
                            readonly marginAvailable: {
                                readonly type: "string";
                                readonly description: "Current account available margin.";
                                readonly examples: readonly ["3905.10"];
                            };
                            readonly userGroupId: {
                                readonly type: "string";
                                readonly description: "User group ID of the account.";
                                readonly examples: readonly ["618566"];
                            };
                        };
                        readonly required: readonly ["accountId", "balance", "credit", "equity", "pnl", "marginUsed", "marginAvailable", "userGroupId"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ReportsControllerGetCloseTradesHistoryReport: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of accounts to fetch the close trades events.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
            readonly cursor: {
                readonly type: "string";
                readonly description: "Cursor to fetch the next page of events. If not provided, the first page of events will be returned. Must be an integer string, greater than or equal to 0 and less than or equal to 9223372036854775807";
                readonly format: "integer";
                readonly examples: readonly ["72057594039889417"];
            };
            readonly limit: {
                readonly type: "string";
                readonly format: "number";
                readonly description: "Page size; max 1000, default 20.";
            };
        };
        readonly required: readonly ["accountId", "type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly instrument: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly openMilliseconds: {
                                readonly type: "string";
                                readonly format: "number";
                                readonly description: "Time of the order open in milliseconds.";
                            };
                            readonly openDateTime: {
                                readonly type: "string";
                                readonly format: "isodate";
                                readonly description: "DateTime of the order open in ISO date string.";
                            };
                            readonly orderType: {
                                readonly type: "string";
                                readonly enum: readonly ["Market", "Protective stop", "Stop loss", "Stop", "Stop Out", "Protective limit", "Take profit", "Limit", "Stop Limit", "Trailing Stop Loss", "Trailing Stop"];
                                readonly description: "`Market` `Protective stop` `Stop loss` `Stop` `Stop Out` `Protective limit` `Take profit` `Limit` `Stop Limit` `Trailing Stop Loss` `Trailing Stop`";
                            };
                            readonly positionSide: {
                                readonly type: "string";
                                readonly enum: readonly ["Buy", "Sell"];
                                readonly description: "`Buy` `Sell`";
                            };
                            readonly closeAmount: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly averageOpenPrice: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly closePrice: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly closeMilliseconds: {
                                readonly type: "string";
                                readonly format: "number";
                                readonly description: "Time of the order close in milliseconds.";
                            };
                            readonly closeDateTime: {
                                readonly type: "string";
                                readonly format: "isodate";
                                readonly description: "DateTime of the order close in ISO date string.";
                            };
                            readonly openAmount: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly closeTradeId: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly openTradeId: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly closeOrderId: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly positionId: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly openOrderId: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly strategyId: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly slPrice: {
                                readonly type: readonly ["string", "null"];
                                readonly format: "number";
                            };
                            readonly slOrderType: {
                                readonly type: readonly ["string", "null"];
                                readonly enum: readonly ["STOP", "STOP_LIMIT", "TRAILING_STOP"];
                                readonly description: "`STOP` `STOP_LIMIT` `TRAILING_STOP`";
                            };
                            readonly slTrailingOffset: {
                                readonly type: readonly ["string", "null"];
                                readonly format: "number";
                            };
                            readonly tpPrice: {
                                readonly type: readonly ["string", "null"];
                                readonly format: "number";
                            };
                            readonly commission: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly swap: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly profit: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                            readonly netProfit: {
                                readonly type: "string";
                                readonly format: "number";
                            };
                        };
                        readonly required: readonly ["instrument", "openMilliseconds", "openDateTime", "orderType", "positionSide", "closeAmount", "averageOpenPrice", "closePrice", "closeMilliseconds", "closeDateTime", "openAmount", "closeTradeId", "openTradeId", "closeOrderId", "positionId", "openOrderId", "strategyId", "slPrice", "slOrderType", "slTrailingOffset", "tpPrice", "commission", "swap", "profit", "netProfit"];
                    };
                };
                readonly links: {
                    readonly description: "Links to the next page of the report. Use `params` for the next page URL search params.";
                    readonly type: "object";
                    readonly required: readonly ["next"];
                    readonly properties: {
                        readonly next: {
                            readonly type: readonly ["object", "null"];
                            readonly required: readonly ["url", "params"];
                            readonly properties: {
                                readonly url: {
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "url";
                                };
                                readonly params: {
                                    readonly type: readonly ["object", "null"];
                                    readonly additionalProperties: true;
                                };
                            };
                        };
                    };
                };
            };
            readonly required: readonly ["data", "links"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ReportsControllerGetTradesHistoryReport: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly startTime: {
                readonly type: "number";
                readonly deprecated: true;
                readonly description: "Start time in milliseconds since epoch.";
                readonly format: "int64";
                readonly minimum: 1575072000000;
                readonly examples: readonly [1709190470483];
                readonly maximum: 9223372036854776000;
            };
            readonly startDateTime: {
                readonly type: "string";
                readonly description: "Start time in ISO format.";
                readonly examples: readonly ["2021-12-31T23:59:59.999Z"];
            };
            readonly endTime: {
                readonly type: "number";
                readonly deprecated: true;
                readonly description: "End time in milliseconds since epoch.";
                readonly format: "int64";
                readonly minimum: 1575072000000;
                readonly examples: readonly [1709192495319];
                readonly maximum: 9223372036854776000;
            };
            readonly endDateTime: {
                readonly type: "string";
                readonly description: "End time";
                readonly examples: readonly ["2021-12-31T23:59:59.999Z"];
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of accounts to fetch the trades history for.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
            readonly accountId: {
                readonly type: "string";
                readonly description: "Account ID.";
                readonly pattern: "^[LD]#[0-9]+$";
                readonly examples: readonly ["L#617289"];
            };
            readonly enableSLTP: {
                readonly type: "boolean";
                readonly description: "Enable or disable `stopLoss`, `stopLossLimit`, `takeProfit` from response. Disabling SLTP may result in faster response time.";
                readonly default: true;
                readonly examples: readonly [false];
            };
        };
        readonly required: readonly ["type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly tradeId: {
                                readonly type: "string";
                                readonly description: "Trade ID";
                                readonly examples: readonly ["72057594039813847"];
                            };
                            readonly orderId: {
                                readonly type: "string";
                                readonly description: "Order ID";
                                readonly examples: readonly ["72057594041242672"];
                            };
                            readonly accountId: {
                                readonly type: "string";
                                readonly description: "Account ID.";
                                readonly pattern: "^[LD]#[0-9]+$";
                                readonly examples: readonly ["L#617289"];
                            };
                            readonly side: {
                                readonly type: "string";
                                readonly description: "Side of the trade\n\n`BUY` `SELL`";
                                readonly enum: readonly ["BUY", "SELL"];
                                readonly examples: readonly ["BUY"];
                            };
                            readonly orderType: {
                                readonly type: "string";
                                readonly description: "Order type\n\n`MARKET` `PROTECTIVE_STOP` `STOP_LOSS` `STOP` `STOP_OUT` `PROTECTIVE_LIMIT` `TAKE_PROFIT` `LIMIT` `STOP_LIMIT` `TRAILING_STOP_LOSS` `TRAILING_STOP`";
                                readonly enum: readonly ["MARKET", "PROTECTIVE_STOP", "STOP_LOSS", "STOP", "STOP_OUT", "PROTECTIVE_LIMIT", "TAKE_PROFIT", "LIMIT", "STOP_LIMIT", "TRAILING_STOP_LOSS", "TRAILING_STOP"];
                                readonly examples: readonly ["MARKET"];
                            };
                            readonly positionStatus: {
                                readonly type: "string";
                                readonly description: "Position status\n\n`CLOSE` `OPEN` `INCREASE` `DECREASE`";
                                readonly enum: readonly ["CLOSE", "OPEN", "INCREASE", "DECREASE"];
                                readonly examples: readonly ["CLOSE"];
                            };
                            readonly tradeTime: {
                                readonly type: "number";
                                readonly deprecated: true;
                                readonly description: "Trade time in milliseconds since Unix epoch";
                                readonly examples: readonly [1709122885502];
                            };
                            readonly tradeDateTime: {
                                readonly type: "string";
                                readonly description: "Trade time in ISO format";
                                readonly examples: readonly ["2021-12-31T23:59:59.999Z"];
                            };
                            readonly price: {
                                readonly type: "string";
                                readonly description: "Price";
                                readonly examples: readonly ["3467.73"];
                            };
                            readonly lots: {
                                readonly type: "string";
                                readonly description: "Amount in lots";
                                readonly examples: readonly ["0.01"];
                            };
                            readonly instrument: {
                                readonly type: "string";
                                readonly description: "Instrument name";
                                readonly examples: readonly ["EURUSD"];
                            };
                            readonly positionId: {
                                readonly type: "string";
                                readonly description: "Position ID";
                                readonly examples: readonly ["72057594038936231"];
                            };
                            readonly pnl: {
                                readonly type: "string";
                                readonly description: "Profit and loss.";
                                readonly examples: readonly ["200.12"];
                            };
                            readonly executionFee: {
                                readonly type: "string";
                                readonly description: "Execution fee";
                                readonly examples: readonly ["3.13"];
                            };
                            readonly stopLoss: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Stop loss price";
                                readonly examples: readonly ["100.13"];
                            };
                            readonly stopLossLimit: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Stop loss limit price";
                                readonly examples: readonly ["100.13"];
                            };
                            readonly takeProfit: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Take profit price";
                                readonly examples: readonly ["100.13"];
                            };
                            readonly userGroupId: {
                                readonly type: "string";
                                readonly description: "User group ID of the account.";
                                readonly examples: readonly ["618566"];
                            };
                        };
                        readonly required: readonly ["tradeId", "orderId", "accountId", "side", "orderType", "positionStatus", "tradeTime", "tradeDateTime", "price", "lots", "instrument", "positionId", "pnl", "executionFee", "stopLoss", "stopLossLimit", "takeProfit", "userGroupId"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ReportsControllerGetUsersActivitiesReport: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly startDateTime: {
                readonly type: "string";
                readonly description: "Start time in ISO format.";
                readonly examples: readonly ["2021-12-31T23:59:59.999Z"];
            };
            readonly endDateTime: {
                readonly type: "string";
                readonly description: "End time in ISO format.";
                readonly examples: readonly ["2021-12-31T23:59:59.999Z"];
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of accounts to include in the report.";
                readonly enum: readonly ["LIVE", "DEMO"];
                readonly examples: readonly ["LIVE"];
            };
        };
        readonly required: readonly ["startDateTime", "endDateTime", "type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly ipAddress: {
                                readonly type: "string";
                                readonly description: "IP address of the user";
                                readonly examples: readonly ["3600:100e:b31c:3d8d:2900:59d6:aaca:e74e"];
                            };
                            readonly userId: {
                                readonly type: "string";
                                readonly description: "Unique identifier of the user";
                                readonly examples: readonly ["56f18b48-8ad0-4573-a9c1-d3f3e2992f46"];
                            };
                            readonly deviceId: {
                                readonly type: "string";
                                readonly description: "Unique identifier of the device";
                                readonly examples: readonly ["27c86721-76e8-4100-aa23-1f0b04c251a4"];
                            };
                            readonly firstSeen: {
                                readonly type: "number";
                                readonly description: "First seen in milliseconds since Unix epoch";
                                readonly examples: readonly [1709122885502];
                            };
                            readonly firstSeenISO: {
                                readonly type: "string";
                                readonly description: "First seen as an ISO 8601 string";
                                readonly examples: readonly ["2024-09-27T20:46:11.666Z"];
                            };
                            readonly lastSeen: {
                                readonly type: "number";
                                readonly description: "Last seen in milliseconds since Unix epoch";
                                readonly examples: readonly [1709122885510];
                            };
                            readonly lastSeenISO: {
                                readonly type: "string";
                                readonly description: "Last seen as an ISO 8601 string";
                                readonly examples: readonly ["2024-09-27T20:46:11.666Z"];
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "Country of the user";
                                readonly examples: readonly ["United States"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "City of the user";
                                readonly examples: readonly ["New York"];
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly description: "Region of the user";
                                readonly examples: readonly ["New York"];
                            };
                            readonly platform: {
                                readonly type: "string";
                                readonly description: "Platform of the user";
                                readonly examples: readonly ["Web"];
                            };
                            readonly osName: {
                                readonly type: "string";
                                readonly description: "Operation System of the user";
                                readonly examples: readonly ["Chrome"];
                            };
                            readonly osVersion: {
                                readonly type: "string";
                                readonly description: "Operation System version of the user";
                                readonly examples: readonly ["109"];
                            };
                            readonly deviceFamily: {
                                readonly type: "string";
                                readonly description: "Device family of the user";
                                readonly examples: readonly ["Google Phone"];
                            };
                            readonly deviceType: {
                                readonly type: "string";
                                readonly description: "City of the user";
                                readonly examples: readonly ["Google Pixel 6 Pro"];
                            };
                        };
                        readonly required: readonly ["ipAddress", "userId", "deviceId", "firstSeen", "firstSeenISO", "lastSeen", "lastSeenISO", "country", "city", "region", "platform", "osName", "osVersion", "deviceFamily", "deviceType"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "501": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UsersControllerCreateUser: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "Email of the user. Use lowercase email for consistency.";
                readonly examples: readonly ["john.doe@tradelocker.com"];
            };
            readonly firstName: {
                readonly type: "string";
                readonly description: "Name of the user (optional).";
                readonly examples: readonly ["John"];
            };
            readonly lastName: {
                readonly type: "string";
                readonly description: "Last name of the user (optional).";
                readonly examples: readonly ["Doe"];
            };
            readonly password: {
                readonly type: "string";
                readonly description: "Desired password. Must be 6 characters long, contain at least one number, one special character and have a mixture of uppercase and lowercase letters";
                readonly examples: readonly ["p@ssW0rd1"];
            };
        };
        readonly required: readonly ["email", "password"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "Idempotency-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Idempotency key (must be a valid UUID)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly description: "The ID of the user. (UUID)";
                    readonly format: "uuid";
                    readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
                };
            };
            readonly required: readonly ["userId"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly default: {
            readonly type: "object";
            readonly properties: {
                readonly "Idempotent-Replayed": {
                    readonly type: "boolean";
                    readonly description: "Header that will be returned if the response was served from idempotency cache (initial execution response)";
                };
            };
        };
    };
};
declare const UsersControllerGetUserDetails: {
    readonly body: {
        readonly oneOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly description: "The ID of the user. (UUID)";
                    readonly format: "uuid";
                    readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
                };
            };
            readonly required: readonly ["userId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly description: "Email of the user. Use lowercase email for consistency.";
                    readonly examples: readonly ["john.doe@tradelocker.com"];
                };
            };
            readonly required: readonly ["email"];
        }];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the user. UUID";
                    readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "Email of the user.";
                    readonly examples: readonly ["john.doe@tradelocker.com"];
                };
                readonly firstName: {
                    readonly type: "string";
                    readonly description: "Name of the user.";
                    readonly examples: readonly ["John"];
                };
                readonly lastName: {
                    readonly type: "string";
                    readonly description: "Surname of the user.";
                    readonly examples: readonly ["Doe"];
                };
                readonly server: {
                    readonly type: "string";
                    readonly description: "The server field for TradeLocker login.";
                    readonly maximum: 8;
                    readonly examples: readonly ["FXBR"];
                };
                readonly createdAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly deprecated: true;
                    readonly description: "Date and time when the user was created.";
                    readonly examples: readonly ["2020-01-01T00:00:00.000Z"];
                };
                readonly createdDateTime: {
                    readonly type: "string";
                    readonly description: "Date and time when the user was created.";
                    readonly examples: readonly ["2020-01-01T00:00:00.000Z"];
                };
            };
            readonly required: readonly ["id", "email", "firstName", "lastName", "server", "createdAt", "createdDateTime"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UsersControllerGetUsersByBrandId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly offset: {
                readonly type: "number";
                readonly description: "Offset the results by specified number.";
                readonly format: "int32";
                readonly minimum: 0;
                readonly default: 0;
                readonly examples: readonly [2000];
                readonly maximum: 2147483647;
            };
            readonly limit: {
                readonly type: "number";
                readonly description: "Limit the number of return results.";
                readonly format: "int32";
                readonly minimum: 1;
                readonly maximum: 100000;
                readonly default: 10000;
                readonly examples: readonly [1000];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the user. UUID";
                                readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "Email of the user.";
                                readonly examples: readonly ["john.doe@tradelocker.com"];
                            };
                            readonly firstName: {
                                readonly type: "string";
                                readonly description: "Name of the user.";
                                readonly examples: readonly ["John"];
                            };
                            readonly lastName: {
                                readonly type: "string";
                                readonly description: "Surname of the user.";
                                readonly examples: readonly ["Doe"];
                            };
                            readonly server: {
                                readonly type: "string";
                                readonly description: "The server field for TradeLocker login.";
                                readonly maximum: 8;
                                readonly examples: readonly ["FXBR"];
                            };
                            readonly createdAt: {
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly deprecated: true;
                                readonly description: "Date and time when the user was created.";
                                readonly examples: readonly ["2020-01-01T00:00:00.000Z"];
                            };
                            readonly createdDateTime: {
                                readonly type: "string";
                                readonly description: "Date and time when the user was created.";
                                readonly examples: readonly ["2020-01-01T00:00:00.000Z"];
                            };
                        };
                        readonly required: readonly ["id", "email", "firstName", "lastName", "server", "createdAt", "createdDateTime"];
                    };
                };
                readonly hasMore: {
                    readonly type: "boolean";
                };
            };
            readonly required: readonly ["data", "hasMore"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UsersControllerGetUsersByEmail: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "Email of the user. Use lowercase email for consistency.";
                readonly examples: readonly ["john.doe@tradelocker.com"];
            };
        };
        readonly required: readonly ["email"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly description: "The ID of the user. (UUID)";
                    readonly format: "uuid";
                    readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
                };
            };
            readonly required: readonly ["userId"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UsersControllerSetEmail: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly userId: {
                readonly type: "string";
                readonly description: "The ID of the user. (UUID)";
                readonly format: "uuid";
                readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "Email of the user. Use lowercase email for consistency.";
                readonly examples: readonly ["john.doe@tradelocker.com"];
            };
        };
        readonly required: readonly ["userId", "email"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UsersControllerSetPassword: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly userId: {
                readonly type: "string";
                readonly description: "The ID of the user. (UUID)";
                readonly format: "uuid";
                readonly examples: readonly ["550e8400-e29b-41d4-a716-446655440000"];
            };
            readonly password: {
                readonly type: "string";
                readonly description: "Desired password. Must be 6 characters long, contain at least one number, one special character and have a mixture of uppercase and lowercase letters";
                readonly examples: readonly ["p@ssW0rd1"];
            };
        };
        readonly required: readonly ["userId", "password"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly statusCode: {
                    readonly type: "number";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly description: "Unique id tied to the specific request. Please provide it when reporting errors, as it greatly helps us in debugging.";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["message", "status", "statusCode"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AccountControllerActivateAccount, AccountControllerCancelAllOrders, AccountControllerChangeUserGroup, AccountControllerCloseAllPositions, AccountControllerCreateAccount, AccountControllerGetAccountDetails, AccountControllerGetAccounts, AccountControllerGetAllAccountsForBrand, AccountControllerRestrictAccount, AccountControllerSuspendAccount, AccountOperationsControllerAddCreditToAccount, AccountOperationsControllerDepositToAccount, AccountOperationsControllerWithdrawFromAccount, BrandControllerGetActiveAccountsByDay, BrandControllerGetActiveAccountsByMonth, BrandControllerGetAssets, BrandControllerGetInstruments, GroupsControllerGetGroups, HomeControllerAlive, HomeControllerReadonly, OrdersControllerCancelOrder, OrdersControllerGetAllOrders, PositionsControllerClosePosition, PositionsControllerGetOpenPositions, ReportsControllerGetAccountOperationsHistory, ReportsControllerGetAccountStatementReport, ReportsControllerGetCloseTradesHistoryReport, ReportsControllerGetTradesHistoryReport, ReportsControllerGetUsersActivitiesReport, UsersControllerCreateUser, UsersControllerGetUserDetails, UsersControllerGetUsersByBrandId, UsersControllerGetUsersByEmail, UsersControllerSetEmail, UsersControllerSetPassword };
